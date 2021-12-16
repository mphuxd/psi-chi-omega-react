import React from "react";

export const navData = {
  navData: [
    {
      link: "About Us",
      sublinks: ["Little Sis Program", "History", "Community Involvement"],
    },
    {
      link: "Members",
      sublinks: ["Brothers", "Alumni"],
    },
    {
      link: "Resources",
      sublinks: ["COVID-19", "FAQ", "Mental Health", "Contact Us"],
    },
    {
      link: "Join",
      sublinks: ["Fraternity", "Little Sis"],
    },
  ],
};

export const navContext = React.createContext(navData.navData);
