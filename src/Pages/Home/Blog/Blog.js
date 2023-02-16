import React from "react";
import "./Blog.css";
const Blog = ({ blog }) => {
  const { title, description, img } = blog;
  return (
    <div className="blog-description">
      <img className="blog-img" src={img} alt="" />
      <h2> {title}</h2>
      <p>
        <small>{description}</small>
      </p>
      <button>Read More</button>
    </div>
  );
};

export default Blog;
