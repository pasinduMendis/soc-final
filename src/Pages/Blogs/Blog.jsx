import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as ReactBoostrap from "react-bootstrap";
import { scrollOn, scrollLock } from "../../config";
import requests from "../../requests";
import "./blog.scss";

const Blog = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollLock();
    async function fetchBlogDetails() {
      const request = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${parseInt(
            id
          )}?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US`
        )
        .then((res) => {
          setLoading(true);
          setBlog(res.data);
          scrollOn();
        });
    }
    fetchBlogDetails();
  }, []);

  return (
    <div>
      {Loading ? (
        <>
          <div
            // style={{
            //   backgroundImage: `url("${requests.fetchTMDBAssetsPath}${blog.backdrop_path}")`,
            // }}
            className="blogHeader"
          >
            <img
              src={`${requests.fetchTMDBAssetsPath}${blog.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="blog_content">
            <h2>{blog.original_title}</h2>
            <div className="blog_inner">
              <p>{blog.overview}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="spinnerBack">
          <ReactBoostrap.Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default Blog;
