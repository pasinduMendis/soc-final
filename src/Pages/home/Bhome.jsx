import "./bhome.scss";
import Mbanner from "../../Components/movie-banner/Mbanner";
import requests from "../../requests";
import OngoingMovies from "../../Components/OngoingMovies/OngoingMovies";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import OngoingMovies2 from "../../Components/OngoingMovies/OngoingMovies2";

const Bhome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bookingHome">
      <Mbanner />
      <div id="spinner">
        <Link to="/food" className="linking">
          <svg
            className="spinner-webkit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 54 54"
          >
            <path d="M28.14,44a3.26,3.26,0,0,1,.53,1.63l.3,4.93a1.42,1.42,0,0,0,1.66,1.31A25.85,25.85,0,0,0,52.18,26.38v0A25.84,25.84,0,1,0,22.05,51.83a1.43,1.43,0,0,0,1.66-1.31L24,45.6a3.74,3.74,0,0,1,1.7-2.84l6.52-5.18a7.06,7.06,0,0,0,2.61-5.71L33.43,9.11A.16.16,0,0,0,33.26,9L32.18,9A1.4,1.4,0,0,0,30.9,10.4v15a1.46,1.46,0,0,1-1.46,1.46h0A1.46,1.46,0,0,1,28,25.45V10.79a1.65,1.65,0,0,0-1.65-1.65h0a1.65,1.65,0,0,0-1.65,1.65V25.45a1.46,1.46,0,0,1-1.46,1.46h0a1.46,1.46,0,0,1-1.46-1.46v-15A1.4,1.4,0,0,0,20.5,9L19.42,9a.16.16,0,0,0-.17.15L17.84,31.87a7.06,7.06,0,0,0,2.61,5.71l5.89,4.68" />
          </svg>
          <div className="spinner-ie"></div>
        </Link>
      </div>

      <div className="spacer2"></div>
      <OngoingMovies2 title="NOW ON THEATERS" />
      <OngoingMovies
        title="UPCOMING MOVIES"
        fetchUrl={requests.fetchNowPlaying}
      />
    </div>
  );
};

export default Bhome;
