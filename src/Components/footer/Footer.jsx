import "./footer.scss";
import $ from "jquery";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footerWrapper">
          <img className="footerImg" src="/logo.png" alt="" />
          <small>
            &copy;2021 <strong>Movie Booking System</strong>, All Rights
            Reserved
          </small>
          <nav className="footer-nav">
            <a href="#" id="button">
              Back to Top
            </a>
            <a href="#">API Documentation</a>
            <a href="#">Collaborators</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
