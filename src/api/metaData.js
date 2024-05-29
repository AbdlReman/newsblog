export const metaData = (page) => {
  switch (page) {
    case "about":
      return {
        title: "About Us | Maharsahb",
        description:
          "Discover Maharsahb. Learn about our mission to bring you the latest trends across fashion, technology, entertainment, and lifestyle. Join us in exploring what's hot and happening.",
      };
    case "contact":
      return {
        title: "Contact Us | Maharsahb",
        description:
          "Get in touch with Maharsahb. We’re here to answer your questions, receive your feedback, and provide support regarding our trending content.",
      };

    case "blog":
      return {
        title: "Blog | Maharsahb",
        description:
          "Stay updated with Maharsahb' blog. Dive into articles, news, and expert insights on the latest trends in fashion, technology, entertainment, and lifestyle.",
      };
    case "home":
      return {
        title: "Home | Maharsahb",
        description:
          "Welcome to Maharsahb. Your ultimate source for the latest trends and viral content across fashion, tech, entertainment, and lifestyle. Discover what’s trending now.",
      };
    default:
      return {
        title: "Maharsahb",
        description:
          "Welcome to Maharsahb. Your ultimate source for the latest trends and viral content across fashion, tech, entertainment, and lifestyle. Discover what’s trending now.",
      };
  }
};
