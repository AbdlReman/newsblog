import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = ({ blog, handleSearch, handleInputChange, searchTerm }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="col-lg-4">
      <div className="sidebar ml-95 rml-0 rmt-100">
        <div className="widget widget-recent-posts">
          <h3 className="widget-title">Recent Posts</h3>
          <div className="post-list">
            <ul className="list-style-one">
              {blog.map((blogItem, index) => {
                const { title, slug } = blogItem.fields;
                return (
                  <li key={index}>
                    <Link onClick={ClickHandler} to={"/blog/" + slug}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="widget widget-search">
          <h3 className="widget-title">Search</h3>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="search"
              value={searchTerm}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="theme-btn">
              search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
