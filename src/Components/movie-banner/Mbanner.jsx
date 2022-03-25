import { useEffect, useState } from "react";
import "./mbanner.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scrollOn, scrollLock } from "../../config";
import requests from "../../requests";
import * as ReactBoostrap from "react-bootstrap";
import axios from "axios";

const Mbanner = () => {
  const [Loading, setLoading] = useState(false);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    scrollLock();
    async function fetchData() {
      const request = await axios
        .get(requests.fetchCinemaBanners)
        .then((res) => {
          setLoading(true);
          setBanners(res.data);
          scrollOn();
        });
      return request;
    }
    fetchData();
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

  return (
    <div>
      {Loading ? (
        <div className="BannerSlider">
          <Slider {...settings}>
            {banners.map((banner) => (
              <img
                key={banner.id}
                src={`${requests.fetchAssetPath}/banners/${banner.banner_image}`}
                alt=""
              />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="spinnerBack">
          <ReactBoostrap.Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default Mbanner;
