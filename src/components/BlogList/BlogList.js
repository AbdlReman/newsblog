import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../BlogSidebar";
import { createClient } from "contentful";

const client = createClient({
  space: "9voqoh34teb4",
  accessToken: "KvGT1-3nxF1Gcs0RGVD0JVnn4xJJLnXIhIeCltMWkxk",
});

const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const entries = await client.getEntries({
          content_type: "blog",
        });
        setBlog(entries.items);
        setFilteredBlogs(entries.items); // Initialize with all blogs
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    }

    fetchBlog();
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const filtered = blog.filter((blogItem) =>
        blogItem.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blog); // If search term is empty, show all blogs
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="blog-list mt-150 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {filteredBlogs.map((blog, bitem) => {
              const { title, slug, author, thumbnail } = blog.fields;
              return (
                <div className="blog-item" key={bitem}>
                  <div className="blog-image">
                    <img
                      src={"https:" + thumbnail?.fields?.file?.url}
                      alt="Blog Image"
                    />
                    <span className="date">{blog.create_at}</span>
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link onClick={ClickHandler} to={"/blog/" + slug}>
                        {title}
                      </Link>
                    </h3>
                    <ul className="admin-header">
                      <li>
                        <i className="fa fa-user"></i>
                        <Link onClick={ClickHandler} to={"/blog/"}>
                          By {author}
                        </Link>
                      </li>
                      <li>
                        <i className="fa fa-graduation-cap"></i>
                        <Link onClick={ClickHandler} to={"/blog/"}>
                          Property
                        </Link>
                      </li>
                      <li>
                        <i className="fa fa-home"></i>
                        <Link onClick={ClickHandler} to={`/blog`}>
                          Residence
                        </Link>
                      </li>
                    </ul>
                    <p>{blog.description}</p>
                    <Link
                      onClick={ClickHandler}
                      to={"/blog/" + slug}
                      className="read-more"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <BlogSidebar
            blog={blog}
            handleSearch={handleSearch}
            handleInputChange={handleInputChange}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
