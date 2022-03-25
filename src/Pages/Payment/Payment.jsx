import axios from "axios";
import "./payment.scss";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Stripe from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import requests from "../../requests";

const Payment = () => {
  const history = useHistory();
  const location = useLocation();
  const ticketPrice = 800;
  const [ticket, setTicket] = useState({
    movie: {
      id: location.state.movieId,
    },
    movieShowTime: {
      dateSlot: {
        id: "",
      },
      id: location.state.movieShowTimeId,
      movie: {
        id: location.state.movieId,
      },
      timeSlot: {
        id: "",
      },
    },
    email: "testmail@gmail.com",
    seats: location.state.seats.toString(),
  });

  toast.configure();

  const handleSubmit = (e) => {
    axios.post(`${requests.dispatchTicket}`, ticket);
  };

  const date = location.state.movie.showTime.dateSlot.date.split("-");

  async function handleToken(token) {
    console.log(token);
    await axios
      .post(`${requests.dispatchPayment}`, "", {
        headers: {
          token: token.id,
          amount: location.state.seats.length * ticketPrice,
        },
      })
      .then((res) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });

    handleSubmit();
  }

  useEffect(() => {
    if (location.state.seats == 0) {
      toast.error("please select 1 or more seats to proceed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      history.goBack();
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
  };
  const notifications = [
    {
      id: 1,
      image: "./banners/1.png",
    },
    {
      id: 2,
      image: "./banners/2.png",
    },
    {
      id: 3,
      image: "./banners/3.png",
    },
    {
      id: 4,
      image: "./banners/4.png",
    },
    {
      id: 5,
      image: "./banners/5.png",
    },
    {
      id: 6,
      image: "./banners/6.png",
    },
  ];

  return (
    <div>
      <div className="st_dtts_wrapper float_left">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 spacer">
              <div className="st_dtts_left_main_wrapper float_left">
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="ticket ticket-2"
                      style={{
                        backgroundImage: `url("${requests.fetchAssetPath}/images/${location.state.movie.poster}")`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="date">
                        <span className="day">{date[2]}</span>
                        <span className="month-and-time">
                          {date[1]} <br />
                          <span className="small">{date[0]}</span>
                        </span>
                      </div>
                      <div className="artist">
                        <span className="name">
                          {location.state.movie.name}
                        </span>
                      </div>
                      <div className="bookedTickets">
                        Booked Tickets <br />{" "}
                        <span>
                          Seat Numbers : {location.state.seats.toString()}
                        </span>
                      </div>
                      <div className="payment_fadebottom"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="st_cherity_section float_left">
                      <div className="st_cherity_img float_left">
                        <Slider {...settings}>
                          {notifications.map((notification) => (
                            <img
                              key={notification.id}
                              src={notification.image}
                              alt=""
                              style={{ width: "100%" }}
                            />
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="st_dtts_bs_wrapper float_left">
                    <div className="st_dtts_bs_heading float_left">
                      <p>Booking summary</p>
                    </div>
                    <div className="st_dtts_sb_ul float_left">
                      <ul>
                        <li>
                          Platinum -{location.state.seats.toString()}
                          <br />
                          {location.state.seats.length} Ticket(s)
                          <span>
                            Rs .{ticketPrice} X {location.state.seats.length}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="st_dtts_sb_h2 float_left">
                      <h5>
                        Sub total{" "}
                        <span>
                          Rs. {location.state.seats.length * ticketPrice}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="st_cherity_btn float_left">
                  <Stripe
                    stripeKey="pk_test_51JeObyEXdQP0Ck3CjOwRRRDyk8Z65U1AaiinArcsyYajARHGIhfYPiWpnXsF1FGBG1IaLduF9NncVzw0hs0ZWIIU004ibEuBdv"
                    amount={location.state.seats.length * 800 * 100}
                    currency="LKR"
                    token={handleToken}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
