import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import BlogSingle from "../../components/BlogDetails/BlogDetails";
import Footer from "../../components/footer/Footer";
import { createClient } from "contentful";

const client = createClient({
  space: "9voqoh34teb4",
  accessToken: "KvGT1-3nxF1Gcs0RGVD0JVnn4xJJLnXIhIeCltMWkxk",
});

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        console.log(`Fetching blog with slug: ${slug}`);
        const entry = await client.getEntries({
          content_type: "blog",
          "fields.slug": slug,
        });

        console.log("Fetched blog entry:", entry);

        if (entry.items.length > 0) {
          setBlog(entry.items[0].fields);
        } else {
          setError("No blog entry found.");
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Error fetching blog details.");
      }
    }

    fetchBlog();
  }, [slug]);

  return (
    <Fragment>
      <Navbar hclass={"header-style-2"} />
      <PageTitle pageTitle={"BlogDetails"} pagesub={"Blog"} />
      {error ? <p>{error}</p> : <BlogSingle blog={blog} />}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetails;
