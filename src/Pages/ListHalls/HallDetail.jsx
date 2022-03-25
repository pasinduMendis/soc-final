import "./listhalls.scss";
import { useLocation } from "react-router";
import { useEffect } from "react";

const HallDetail = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="hallTitle">
        <div className="col">
          <img className="hallBanner" src="theatres_banner.jpg" />
        </div>
        <div className="hallTitleAbsolute">
          <div className="hallTitleMain">{location.state?.name}</div>
          <div className="hallTitleSub">{location.state?.location}</div>
        </div>
      </div>
      <div className="container hallAbout">
        <div className="row">
          <div className="col-md-5 col-xl-4 col-xxl-4">
            <h1>About</h1>
          </div>
          <div className="col-md-7 col-xl-8 col-xxl-8">
            <p>
              {location.state?.about}
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container hallAbout">
        <div className="row">
          <div className="col-md-5 col-xl-4 col-xxl-4">
            <h1>Contact</h1>
          </div>
          <div className="col-md-7 col-xl-8 col-xxl-8">
            <p>
              <strong>{location.state?.address}</strong>
              <br />
            </p>
            <p>
              Phone: {location.state?.phone}
              <br />
            </p>
            <p>
              Email: savoymanager@eapmovies.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container hallFacility">
        <div className="row">
          <div className="col-md-12 col-xl-4 col-xxl-4">
            <h1>Facilities</h1>
          </div>
          <div className="col-4 col-md-4 col-lg-4 col-xl-2">
            <img src="ico1.png" />
            <p className="facilityHeading">Parking</p>
            <p>
              The theater has its own parking on site for customers.
              <br />
            </p>
          </div>
          <div className="col-4 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
            <img src="ico2.png" />
            <p className="facilityHeading">Snacks and Drinks</p>
            <p>
              Snacks and drinks are available for purchase at the theater snack
              counters.
              <br />
            </p>
          </div>
          <div className="col-4 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
            <img src="ico3.png" />
            <p className="facilityHeading">Restaurant</p>
            <p>
              Enjoy a sit-down meal at the theater with family and friends
              before or after a movie.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallDetail;
