export const metaData = (page) => {
  switch (page) {
    case "about":
      return {
        title: "About Us",
        description:
          "Maidaan, a trusted partner, helps you explore the unique gems of real estate marketing.",
      };
    case "contact":
      return {
        title: "Contact Us",
        description: "Get in touch with us.",
      };
    case "Projects":
      return {
        title: "Victory-Villas Projects",
        description:
          "Luxurious retreats where comfort, elegance, and style converge in perfect harmony",
      };
    case "Svillas":
      return {
        title: "Silver Villas",
        description:
          "Where refined elegance meets luxurious comfort in every corner",
      };
    case "Gvillas":
      return {
        title: "Golden Villas",
        description:
          "Where opulence and extravagance intertwine to create a haven of luxury",
      };
    case "Dvillas":
      return {
        title: "Diamond Villas",
        description:
          "The epitome of luxury living, where exclusivity and grandeur redefine sophistication",
      };

    case "home":
      return {
        title: "Victory Villas - Discover Your New Home",
        description: "Unlock The Door To Your Dream Property With Maidaan",
      };

    default:
      return {
        title: "Victory Villas - Discover Your New Home",
        description: "Unlock The Door To Your Dream Property With Maidaan",
      };
  }
};
