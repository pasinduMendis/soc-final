import axios from "axios";
import React, { useEffect, useState } from "react";
import { scrollOn, scrollLock } from "../../config";
import requests from "../../requests";
import "./tickets.scss";

const Tickets = () => {
  const [Loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function fetchTickets() {
      scrollLock();
      const request = await axios
        .get(`${requests.fetchUserTickets}` + "/menadithrox1@gmail.com")
        .then((res) => {
          setLoading(true);
          setTickets(res.data);
          scrollOn();
        });

      return request;
    }
    fetchTickets();
  }, []);

  return (
    <div
      className={
        "col-md-6 myTickets" + (tickets.length < 3 ? " heightFull" : "")
      }
    >
      {tickets.map((ticket, i) => (
        <div className="myTicketSingle">
          <div
            key={i}
            className="ticket ticket-2"
            style={{
              backgroundImage: `url("${requests.fetchAssetPath}/images/${ticket.movie.poster_path}")`,
              backgroundSize: "cover",
            }}
          >
            <div className="date">
              <span className="day">
                {ticket.movieShowTime.dateSlot.date.split("-")[2]}
              </span>
              <span className="month-and-time">
                {ticket.movieShowTime.dateSlot.date.split("-")[1]} <br />
                <span className="small">
                  {ticket.movieShowTime.dateSlot.date.split("-")[0]}
                </span>
              </span>
            </div>
            <div className="artist">
              <span className="name">{ticket.movie.title}</span>
            </div>
            <div className="bookedTickets">
              Booked Tickets <br /> <span>Seat Numbers : {ticket.seats}</span>
            </div>
            <div className="payment_fadebottom"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
