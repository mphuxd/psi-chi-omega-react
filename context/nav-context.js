import React from "react";

export const navData = {
  navData: [
    {
      link: "Who We Are",
      sublinks: ["About ΨΧΩ", "Little Sis Program", "History", "Our Commitments"],
    },
    {
      link: "Members",
      sublinks: ["The Brothers", "Alumni"],
    },
    {
      link: "Resources",
      sublinks: ["COVID-19", "FAQ", "Contact Us"],
    },
    {
      link: "Join Us",
      sublinks: ["Fraternity", "Little Sis"],
    },
  ],
};

export const navContext = React.createContext(navData.navData);
