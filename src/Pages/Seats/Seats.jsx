import "./seats.scss";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router";
import * as ReactBoostrap from "react-bootstrap";
import { scrollOn, scrollLock } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";
import requests from "../../requests";

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function App() {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [showTimes, setShowTimes] = useState([]);
  const [ShowTimeId, setShowTimeId] = useState();

  const [selectedShowTime, setSelectedShowTime] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollLock();
    async function fetchShowTimes() {
      const req = await axios
        .get(`${requests.fetchCinemaMovieShowTime}${parseInt(id)}`)
        .then((res) => {
          setLoading(true);
          setShowTimes(res.data);
          setSelectedShowTime(res.data[0]);
          setShowTimeId(res.data[0].id);
          scrollOn();
        });
      return req;
    }
    fetchShowTimes();
  }, []);

  const ShowTimeChange = (e) => {
    setSelectedSeats([]);
    const obj = showTimes.find((t) => t.id == e.target.value);
    setSelectedShowTime(obj);
    setShowTimeId(obj.id);
  };

  return (
    <div>
      {Loading ? (
        <div
          className="App"
          style={{
            backgroundImage: `url("${requests.fetchAssetPath}/images/${showTimes[0]?.movie.poster_path}")`,
            backgroundBlendMode: "hue",
            backgroundSize: "cover",
          }}
        >
          <div className="test">
            <div className="Movies">
              <label htmlFor="">Pick a Show Time</label>
              <select onChange={ShowTimeChange}>
                {showTimes.map((showTime) => (
                  <option key={showTime.id} value={showTime.id}>
                    &#xf073;&nbsp; {showTime.dateSlot.date} &nbsp;
                    &nbsp;&#xf017; &nbsp;
                    {showTime.timeSlot.time}
                  </option>
                ))}
              </select>
            </div>
            <ShowCase />
            <Cinema
              posterPath={showTimes[0]?.movie.poster_path}
              seatsArray={selectedShowTime?.seats}
              selectedSeats={selectedSeats}
              onSelectedSeatsChange={(selectedSeats) =>
                setSelectedSeats(selectedSeats)
              }
            />

            <p className="info2">
              You have selected{" "}
              <span className="count">{selectedSeats.length}</span>
              <br /> seats for the price of
              <span className="total"> {selectedSeats.length * 800} LKR</span>
            </p>

            <div style={{ marginBottom: "110px" }}>
              <Link
                to={{
                  pathname: "/payment",
                  state: {
                    movieId: parseInt(id),
                    movieShowTimeId: parseInt(ShowTimeId),
                    seats: selectedSeats,
                    movie: {
                      name: showTimes[0]?.movie.title,
                      poster: showTimes[0]?.movie.poster_path,
                      showTime: selectedShowTime,
                    },
                  },
                }}
                className="linking"
                style={{ textDecoration: "none" }}
              >
                {/* {selectedSeats.length != 0 ? (
                  <div className="nextBtn">Pay Now</div>
                ) : (
                  <div style={{ marginBottom: "50px" }}></div>
                )} */}
                {selectedSeats.concat(
                  selectedShowTime?.seats.split(",").map(Number).length
                ) != 64 && selectedSeats.length != 0 ? (
                  <div className="nextBtn">Pay Now</div>
                ) : (
                  <div style={{ marginBottom: "50px" }}></div>
                )}
              </Link>
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
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({
  selectedSeats,
  onSelectedSeatsChange,
  posterPath,
  seatsArray,
}) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  const movie2 = seatsArray?.split(",")?.map(Number);
  // console.log(seatsArray?.length);

  return (
    <div className="Cinema">
      <div className="screen">
        <img
          className="screenImg"
          src={`${requests.fetchAssetPath}/images/${posterPath}`}
          alt=""
        />
      </div>

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie2?.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
