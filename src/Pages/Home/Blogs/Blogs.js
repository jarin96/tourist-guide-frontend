import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="row">
        <h2 className="blogs-title mt-3 mb-3">Blogs</h2>

        <div className="blogs-container">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
