import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./bookingsingle.scss";
import { img_300 } from "../../config";
import { Link } from "react-router-dom";
import { scrollOn, scrollLock } from "../../config";
import * as ReactBoostrap from "react-bootstrap";
import $ from "jquery";
import requests from "../../requests";

const BookingSingle = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [showTimes, setshowTimes] = useState([]);

  useEffect(() => {
    //if [], run once when the row loads, and don't run again
    window.scrollTo(0, 0);
    scrollLock();
    async function fetchMovieDetails() {
      const req = await axios
        .get(`${requests.fetchCinemaMovie}${parseInt(id)}`)
        .then((res) => {
          setLoading(true);
          setMovie(res.data);
          scrollOn();
        });
    }
    fetchMovieDetails();
    getMovieDetails(movie.tmdbId);
    getShowTimes();
  }, [movie.tmdbId]);

  const getMovieDetails = async (id) => {
    scrollLock();
    const request = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US`
      )
      .then((res) => {
        setLoading(true);
        setMovie2(res.data);
        scrollOn();
      });
  };

  const getShowTimes = async () => {
    scrollLock();
    await axios
      .get(`${requests.fetchCinemaMovieShowTime}${parseInt(id)}`)
      .then((res2) => {
        setLoading(true);
        setshowTimes(res2.data);
        scrollOn();
      });
  };

  // console.log(movie);
  // console.log(movie2);

  return (
    <div>
      {Loading ? (
        <div className="movie-card">
          <div className="containerCard">
            <a href="#">
              <div className="posterContainer">
                <img
                  src={`${img_300}${movie2?.poster_path}`}
                  alt="cover"
                  className="cover"
                />
                {/* <button className="trailerPlayBooking">
                Play Trailer
              </button> */}
              </div>
            </a>

            <div className="hero">
              <img
                className="coverImg"
                src={`${requests.fetchAssetPath}/images/${movie?.poster_path}`}
                alt=""
              />
              <div className="movieTrailer">
                <iframe
                  className="youtube-video"
                  src={`https://www.youtube.com/embed/${movie.youtube}?autoplay=1&mute=0&VQ=HD720&playsinline=1&loop=1&playlist=${movie.youtube}&controls=0&disablekb=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="fadebottom2"></div>
              <div className="details">
                <div className="title1">{movie.title}</div>
                <div className="title2">{movie2?.tagline}</div>
                <span className="likes">{movie2?.vote_count} Votes</span>
                <div className="ticketButtonDiv">
                  {showTimes.length != 0 ? (
                    <Link
                      to={`/seats/${movie?.id}}`}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="ticketButton">Book Tickets</span>
                    </Link>
                  ) : (
                    <span className="ticketButtonNA">
                      Tickets Not Available
                    </span>
                  )}
                  {/* <span className="ticketButton">Book Tickets</span> */}
                </div>
              </div>
            </div>

            <div className="description">
              <div className="column1">
                {movie2.genres?.map((genre, i) => (
                  <span key={i} id={genre?.id} className="tag">
                    {genre?.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="cinemaTag">
              <span> NOW ON</span> <br /> Selected Cinemas
            </div>
            <div className="runtime">{movie2?.runtime} Min.</div>
            <div className="languages">
              Languages:
              {movie2.spoken_languages?.map((lang, i) => (
                <span key={i} id={lang?.id}>
                  {" "}
                  {lang?.name},{" "}
                </span>
              ))}
            </div>
            <div className="qualites">2D , 3D , IMAX 2D , MX4D , 4DX</div>
            <div className="column2">
              <p>{movie2.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinnerBack">
          <ReactBoostrap.Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default BookingSingle;
