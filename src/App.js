import Bhome from "./Pages/home/Bhome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import BookingSingle from "./Components/booking-single/BookingSingle";
import BookingSingle2 from "./Components/booking-single/BookingSingle2";
import ListHalls from "./Pages/ListHalls/ListHalls";
import Footer from "./Components/footer/Footer";
import Seats from "./Pages/Seats/Seats";
import HallDetail from "./Pages/ListHalls/HallDetail";
import FoodCourt from "./Pages/FoodCourt/FoodCourt";
import Payment from "./Pages/Payment/Payment";
import Blogs from "./Pages/Blogs/Blogs";
import Blog from "./Pages/Blogs/Blog";
import "./App.scss";
import Tickets from "./Pages/Tickets/Tickets";
import Main from './Components/main/main'
import Userpage from './Components/userPage/userpage'
import ForgotPass from './Components/forgotPass/forgot'
import { useState } from 'react'

function App() {
  var token=localStorage.getItem("token")
  return (
    <Router>
      <div className="app">
        {(token != null)?
            <Navbar />:<div></div>
        }
        
        <Switch>
        {(token != null)?
            <Route path="/" exact>
            <Bhome />
          </Route>:
          <Route path='/' exact>
          <Main />
          </Route>
        }
          <Route path="/home" exact>
            <Bhome />
          </Route>:
          <Route path='/login'>
          <Main />
          </Route>
          <Route path='/user/:id' exact>
            <Userpage />
          </Route>
          <Route path='/forgotPass' exact>
            <ForgotPass />
          </Route>
          <Route path="/cinemas">
            <ListHalls />
          </Route>
          <Route path="/single/:id/">
            <BookingSingle />
          </Route>
          <Route path="/movie/:id/">
            <BookingSingle2 />
          </Route>
          <Route path="/seats/:id/">
            <Seats />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>

          <Route path="/halldetails">
            <HallDetail />
          </Route>

          <Route path="/food">
            <FoodCourt />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
