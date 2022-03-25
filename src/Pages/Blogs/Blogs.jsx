import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../../requests";
import { scrollOn, scrollLock } from "../../config";
import * as ReactBoostrap from "react-bootstrap";

import "./blogs.scss";

const Blogs = () => {
  const [Loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollLock();
    async function fetchBlogs() {
      const request = await axios
        .get(requests.fetchHorrorMovies)
        .then((res) => {
          setLoading(true);
          setBlogs(res.data.results);
          scrollOn();
        });
      // setBlogs(request?.data?.results);
      return request;
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      {Loading ? (
        blogs.map((blog, i) => (
          <div
            key={i}
            className="movie_info emiz"
            style={{
              backgroundImage: `url("${requests.fetchTMDBAssetsPath}${blog.backdrop_path}")`,
            }}
          >
            <div className="blogs_fadebottom"></div>
            <div className="blog_info_container">
              <div className="row">
                <div className="col-lg-offset-7 col-lg-5 col-sm-offset-5 col-sm-7">
                  <div className="emiz_blog">
                    <h1>{blog.original_title}</h1>
                    <p>{blog.overview}</p>
                    <Link
                      to={`/blog/${blog.id}}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="readmore">Read More</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="spinnerBack">
          <ReactBoostrap.Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default Blogs;
