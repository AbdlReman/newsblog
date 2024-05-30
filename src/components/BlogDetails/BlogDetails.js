import React from "react";
import { Link } from "react-router-dom";

import BlogForm from "./BlogForm";

const BlogSingle = ({ blog }) => {
  if (!blog) {
    return <p>Loading...</p>;
  }
  const articleUrl = `https://mahersahb.com/blog/${blog.slug}`;
  console.log(blog.slug);

  const shareUrl = encodeURIComponent(articleUrl);

  return (
    <section className="blog-single mt-150 mb-50">
      <div className="container">
        <div className="blog-image">
          {blog.featureImage && (
            <img
              src={"https:" + blog.featureImage.fields.file.url}
              alt={blog.title}
            />
          )}
          <span className="date">{blog.createAt}</span>
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <ul className="admin-header">
          <li>
            <i className="fa fa-user"></i>By {blog.auther}
          </li>
          <li>
            <i className="fa fa-graduation-cap"></i>Property
          </li>
          <li>
            <i className="fa fa-home"></i>Residence
          </li>
        </ul>

        <p>{blog.discription}</p>

        <div className="row mt-65">
          {/* <div className="col-md-6 mb-40">
            <img src={bImg1} alt="Blog Single" />
          </div>
          <div className="col-md-6 mb-40">
            <img src={bImg2} alt="Blog Single" />
          </div> */}
          {blog.gallary.map((image, index) => (
            <div className="col-md-6 mb-40" key={index}>
              <img
                src={"https:" + image.fields.file.url}
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="blog-share mb-65">
          <div className="social-icons">
            <span className="social-title">Share</span>
            <span>
              <Link to={`https://twitter.com/intent/tweet?url=${shareUrl}`}>
                <i className="fa fa-twitter"></i>
              </Link>
              <Link
                to={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              >
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link to={`https://www.instagram.com/share?url=${shareUrl}`}>
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                to={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
              >
                <i className="fa fa-linkedin"></i>
              </Link>
            </span>
          </div>
        </div>
        <form className="comment-form">
          {/* <h3 className="comment-title">Leave a Reply</h3> */}
          {/* <BlogForm /> */}
        </form>
      </div>
    </section>
  );
};

export default BlogSingle;
