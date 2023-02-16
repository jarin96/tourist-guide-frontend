import React from "react";
import { Button } from "react-bootstrap";
import "./Blog.css";
const Blog = ({ blog }) => {
  const { title, description, img } = blog;
  return (
    <div className="blog-description">
      <img className="blog-img w-100" src={img} alt="" />
      <div className="blog">
        <h3> {title}</h3>
        <p className="blog-des">
          <small>{description}</small>
        </p>
        <Button variant="outline-dark">Read More</Button>
      </div>
    </div>
  );
};

export default Blog;
