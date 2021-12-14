import React from "react";

export const navData = {
  navData: [
    {
      link: "About Us",
      sublinks: ["About Us", "Little Sis Program", "History", "Community Involvement"],
    },
    {
      link: "Members",
      sublinks: ["Brothers", "Alumni"],
    },
    {
      link: "Resources",
      sublinks: ["Resources", "COVID-19", "FAQ", "Mental Health", "Contact Us"],
    },
    {
      link: "Join",
      sublinks: ["Join Us", "Fraternity", "Little Sis"],
    },
  ],
};

export const navContext = React.createContext(navData.navData);
