import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./bookingsingle.scss";
import { img_300 } from "../../config";
import { Link } from "react-router-dom";
import { scrollOn, scrollLock } from "../../config";
import * as ReactBoostrap from "react-bootstrap";
import $ from "jquery";

const BookingSingle = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [movieLink, setMovieLink] = useState([]);

  useEffect(() => {
    //if [], run once when the row loads, and don't run again
    window.scrollTo(0, 0);
    async function fetchData() {
      const request = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${parseInt(
            id
          )}?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US`
        )
        .then((res) => {
          setLoading(true);
          setMovie(res.data);
          scrollOn();
        });

      return request;
    }
    fetchData();
    getMovieDetails(parseInt(id));
  }, []);

  const getMovieDetails = async (id) => {
    const request = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US`
      )
      .then((res) => {
        const size = res.data.results.length;
        if (size > 5) {
          setMovieLink(res.data.results[size - 2]);
        } else {
          setMovieLink(res.data.results[size - 1]);
        }
      });
  };

  return (
    <div>
      {Loading ? (
        <div className="movie-card">
          <div className="containerCard">
            <a href="#">
              <div className="posterContainer">
                <img
                  src={`${img_300}${movie?.poster_path}`}
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
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt=""
              />
              <div className="movieTrailer">
                <iframe
                  className="youtube-video"
                  src={`https://www.youtube.com/embed/${movieLink?.key}?autoplay=1&mute=0&VQ=HD720&playsinline=1&loop=1&playlist=${movieLink?.key}&controls=0&disablekb=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="fadebottom2"></div>
              <div className="details">
                <div className="title1">{movie.original_title}</div>
                <div className="title2">{movie?.tagline}</div>
                <span className="likes">{movie?.vote_count} Votes</span>
              </div>
            </div>

            <div className="description">
              <div className="column1">
                {movie.genres?.map((genre, i) => (
                  <span id={genre?.id} className="tag" key={i}>
                    {genre?.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="cinemaTag">
              <span> NOW ON</span> <br /> Selected Cinemas
            </div>
            <div className="runtime">{movie?.runtime} Min.</div>
            <div className="languages">
              Languages:
              {movie.spoken_languages?.map((lang, i) => (
                <span key={i} id={lang?.id}>
                  {" "}
                  {lang?.name},{" "}
                </span>
              ))}
            </div>
            <div className="qualites">2D , 3D , IMAX 2D , MX4D , 4DX</div>
            <div className="column2">
              <p>
                {movie.overview} Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Commodi illum quia, laboriosam assumenda
                magnam labore quibusdam dolore odit perspiciatis repudiandae,
                voluptatem hic doloribus laborum dolorem quidem accusantium!
                Eos, qui reprehenderit.
              </p>
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
