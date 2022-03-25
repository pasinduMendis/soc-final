import "./ongoingMovies.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { scrollOn, scrollLock } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";

const OngoingMovies = ({ title, fetchUrl }) => {
  const [Loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
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
    // scrollLock();
    async function fetchData() {
      const request = await axios.get(fetchUrl).then((res) => {
        setLoading(true);
        setMovies(res.data.results);
        // scrollOn();
      });

      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="heading">{title}</div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="movie movieOngoing" key={movie?.id}>
            <img src={`${base_url}${movie.backdrop_path}`} alt="" />
            <div className="movieOngoingInfo">
              <div className="MovieTitle">{movie?.original_title}</div>
              <Link
                to={`/single/${movie?.id}}`}
                style={{ textDecoration: "none" }}
              >
                <span className="info">Review</span>
              </Link>
            </div>
            <div className="movieInfo_fadebottom"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OngoingMovies;
