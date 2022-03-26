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
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  },[])
  return (
    <Router>
      <div className="app">
        {token &&
            <Navbar ChanegeToken={(val)=>{setToken(val)}}/>
        }
        
        <Switch>
        
            <Route path="/" exact>
            {(token)?<Bhome ChanegeToken={(val)=>{setToken(val)}}/>:
            <Main/>}
          </Route>:
        
          <Route path="/home" exact>
            {(token)?<Bhome  ChanegeToken={(val)=>{setToken(val)}}/>:<Main/>}
          </Route>:
          <Route path='/login' exact>
          <Main />
          </Route>
          <Route path='/user/:id' exact>
           {(token)?<Userpage/>:<Main/>}
          </Route>
          <Route path='/forgotPass' exact>
            <ForgotPass />
          </Route>
          <Route path="/cinemas">
            {(token)?<ListHalls/>:<Main/>}
          </Route>
          <Route path="/single/:id/">
            {(token)?<BookingSingle/>:<Main/>}
          </Route>
          <Route path="/movie/:id/">
            {(token)?<BookingSingle2/>:<Main/>}
          </Route>
          <Route path="/seats/:id/">
            {(token)?<Seats/>:<Main/>}
          </Route>
          <Route path="/payment">
            {(token)?<Payment/>:<Main/>}
          </Route>

          <Route path="/blogs">
            {(token)?<Blogs/>:<Main/>}
          </Route>
          <Route path="/blog/:id">
            {(token)?<Blog/>:<Main/>}
          </Route>

          <Route path="/halldetails">
            {(token)?<HallDetail/>:<Main/>}
          </Route>

          <Route path="/food">
            {(token)?<FoodCourt/>:<Main/>}
          </Route>
          <Route path="/tickets">
            {(token)?<Tickets />:<Main/>}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
