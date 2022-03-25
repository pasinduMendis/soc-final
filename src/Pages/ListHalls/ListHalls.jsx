import "./listhalls.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ListHalls = () => {
  const [theaters, setTheaters] = useState([
    {
      name: "Savoy 3D",
      location: "Wallawatte",
      about:
        "Savoy Cinema is owned and managed by EAP Films & Theaters Private Limited. It has long been a one of the top end movie entertainment centers in and around Colombo city. Savoy Cinema is well equipped with the latest movie technology can accommodate 150 GOLD CLASS, 497ODC and 8 Box seats that can seat two per Box. Savoy Cinema currently screen movies in four major languages, namely English and Hindi Movies and the cinema currently screens four movies per day.",
      address: "No 12, Savoy Building, Wellwatte, Colombo 6, Wellawatte",
      phone: "+94117444466, +94117444466",
      email: "savoymanager@eapmovies.com",
      image: "1.png",
    },
    {
      name: "Savoy Premier",
      location: "Wallawatte",
      about: "",
      address: "Ramakrishna Road, Wellawatte",
      phone: "+94117446223",
      email: "savoypremiere@eapmovies.com",
      image: "2.png",
    },
    {
      name: "Liberty",
      location: "Colombo 03",
      about: "",
      address: "No. 35, Srimath Anagarika Dharmapala Mawatha, Colombo 03",
      phone: "+94112325266",
      email: "waruna@scopecinemas.com",
      image: "3.png",
    },
    {
      name: "Milano-Gold",
      location: "Kegalle",
      about: "3D Digital, 7.1 Sound System.",
      address:
        "DD Athukorala Supermarket (pvt) Ltd, No 122, Main Street, Kegalle",
      phone: "+94352221222",
      email: "milanomovie@gmail.com",
      image: "4.png",
    },
    {
      name: "CCC VIP Screen",
      location: "Colombo 02",
      about: "Comfortable seats.The totally enjoyable movie experience.",
      address: "137, Sir James Pieris Mawatha, Colombo, Colombo 02",
      phone: "+94112083064",
      email: "managerccc@scopecinemas.com",
      image: "5.png",
    },
    {
      name: "Nikado",
      location: "Kadawatha",
      about:
        "Nikado cinema is located in the city of Kadawatha 15km away from the capital of Colombo along the A1 Kandy road. which is owned by the prestigious company Movie works (Pvt) Ltd, presenting fabulous cinema experience for the viewers.",
      address: "Nikado Cinema, Kandy Road, Kadawatha",
      phone: "+94114347705",
      email: "nikadocinema@movieworks.lk",
      image: "6.png",
    },
    {
      name: "Concord",
      location: "Dehiwala",
      about:
        "Concord cinema in Dehiwela is another key cinema complex of EAP Films & Theaters. Primarily popular for its screening of Tamil language films, this cinema is equipped with a 409 seat capacity with 104 Balcony Seats, 293 ODC and 6 Box seats that caters to two patrons per Box.",
      address: "No 139, Galle Road, Dehiwela, Dehiwala",
      phone: "+94117549630, +94117549630",
      email: "concord@eapmovies.com",
      image: "7.png",
    },
    {
      name: "Cinemax 3D",
      location: "Jaela",
      about:
        "Cinemax Cinema in Ja-Ela is one of top end movie cinemas that is operated by EAP Films and Theaters outside Colombo and it is one of the most sought after cinemas by the patrons living outside colombo. At present it  screens most of the top end movies including English, Sinhala and Hindi language movies.",
      address: "No 165, Reality Plaza, Colombo Road, Ja-ela, Jaela",
      phone: "+94117549650, +94117549650",
      email: "cinemax@eapmovies.com",
      image: "8.png",
    },
    {
      name: "Willmax 3D",
      location: "Anuradhapura",
      about:
        "Wilmax Cinema, owned and managed by EAP Films & Theaters private Limited, has an excellent track record for bringing top end movie entertainment to movie lovers at Anuradhapura, Sri Lanka. Wilmax Cinema is well equipped with the latest movie technology and can accommodate 362 patrons, which include 258 ODC seats, 92 balcony seats and also include 6 boxes. The cinema currently screens three movies per day.",
      address: "No 5014/02 , Maithripala Senanayake Mawatha, Anuradhapura",
      phone: "+94257429300, +94257429300",
      email: "willmax@eapmovies.com",
      image: "9.png",
    },
    {
      name: "Excel 3D",
      location: "Colombo 10",
      about:
        "Excel Cinema in Excel world is one of top end movie cinemas that is operated by EAP Films. Excel Cinema is well equipped with the latest movie technology and can accommodate 80 patrons.",
      address: "No 338, T.B. Jayah Mawatha,, Colombo 10, Colombo 10",
      phone: "+94117452855",
      email: "excelcinema@eapmovies.com",
      image: "10.png",
    },
    {
      name: "Queens 3D",
      location: "Galle",
      about:
        "Queens Cinema is owned and managed by EAP Films & Theaters Private Limited. Queens has long been a one of the top end movie entertainment centers located at the Galle city.Queens Cinema is well equipped with the latest movie technology can accommodate 418 patrons",
      address: "No 29, Wakwella Road, Galle, Galle",
      phone: "+94917214511",
      email: "queens@eapmovies.com",
      image: "11.png",
    },
    {
      name: "Saxon Cinema",
      location: "Kollupitiya",
      about: "",
      address: "Marin Drive, Kollupitiya, Colombo - 03, Kollupitiya",
      phone: "+94112372928",
      email: "",
      image: "12.png",
    },
    {
      name: "Sinexpo",
      location: "Kurunegala",
      about:
        "Sinexpo Cinema in Kurunegala is one of top end movie cinemas that is operated by EAP Films and Theaters outside Colombo and it is one of the most sought after cinemas by the patrons living outside colombo.",
      address: "South Circular Road, Kurunegala",
      phone: "+94377214542",
      email: "sinexpo@eapmovies.com",
      image: "13.png",
    },
    {
      name: "Osaka Lite",
      location: "Nittambuwa",
      about:
        "Osaka Lite cinema is equipped with latest 4K digital projection systems coupled with 7.1 digital surround sounds and eye-popping 3D to give our patrons the ultimate movie-going experience. Osaka Lite project partners are Osaka Fashions. Their initiative is to include a modern cinema in one of the most sought-after shopping malls in Sri Lanka. Osaka Fashions Nittambuwa is a modern-day shoppers dream come true venue designed and maintained with highest of the international standards with all big vendors active and with well-maintained food court, salon, banks and availability of ample parking space.",
      address: "Osaka Shopping Complex, Nittambuwa",
      phone: "+94334942183",
      email: "osakalite@movieworks.lk",
      image: "14.png",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section style={{ margin: "37px" }}>
        <div className="container">
          <h1 className="theaterHeading">Theaters</h1>
        </div>

        <div className="container">
          <div className="row">
            {theaters.map((theater, i) => (
              <div className="col-md-3 theaterCard" key={i}>
                <img src={`/halls/${theater.image}`} />
                <h1>{theater.name}</h1>
                <p>{theater.location}</p>
                <Link
                  to={{
                    pathname: "/halldetails",
                    state: {
                      name: theater.name,
                      location: theater.location,
                      about: theater.about,
                      address: theater.address,
                      phone: theater.phone,
                      email: theater.email,
                    },
                  }}
                  className="linking"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn btn-primary" type="button">
                    More Info
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListHalls;
