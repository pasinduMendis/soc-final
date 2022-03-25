import "./ongoingMovies.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { scrollOn, scrollLock } from "../../config";
import * as ReactBoostrap from "react-bootstrap";
import { Link } from "react-router-dom";
import requests from "../../requests";

const OngoingMovies2 = ({ title }) => {
  const [Loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    scrollLock();
    async function fetchData() {
      const request = await axios
        .get(requests.fetchCinemaOngoingMovies)
        .then((res) => {
          setLoading(true);
          setMovies(res.data);
          scrollOn();
        });
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      {Loading ? (
        <div>
          <div className="heading">{title}</div>
          <Slider {...settings}>
            {movies.map((movie) => (
              <div className="movie movieOngoing" key={movie?.id}>
                <img
                  src={`${requests.fetchAssetPath}/images/${movie.poster_path}`}
                  alt=""
                />
                <div className="movieOngoingInfo">
                  <div className="MovieTitle">{movie?.title}</div>
                  <Link
                    to={`/movie/${movie?.id}}`}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="info">Buy Tickets</span>
                  </Link>
                </div>
                <div className="movieInfo_fadebottom"></div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="spinnerBack">
          <ReactBoostrap.Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default OngoingMovies2;
