import React from "react";

export const navData = {
  navData: [
    {
      link: "About Us",
      sublinks: ["Little Sister Program", "History", "Community Involvement"],
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
      sublinks: ["Psi Chi Omega Fraternity", "Psi Chi Omega Little Sis"],
    },
  ],
};

export const navContext = React.createContext(navData.navData);
