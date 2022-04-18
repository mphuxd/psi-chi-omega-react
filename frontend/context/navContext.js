import React from "react";

export const navData = {
  groups: [
    {
      groupName: "Who We Are",
      groupTag: "about",
      links: [
        {
          name: "About ΨΧΩ",
          href: "/about-us",
        },
        {
          name: "Little Sis Program",
          href: "/about-us/little-sis-program",
        },
        {
          name: "History",
          href: "/about-us/history",
        },
        {
          name: "Our Commitments",
          href: "/about-us/community-involvement",
        },
      ],
    },
    {
      groupName: "Members",
      groupTag: "members",
      links: [
        {
          name: "The Brothers",
          href: "/members/brothers",
        },
        {
          name: "Alumni",
          href: "/members/alumni",
        },
      ],
    },
    {
      groupName: "Resources",
      groupTag: "resources",
      links: [
        {
          name: "COVID-19",
          href: "/resources/covid-19",
        },
        {
          name: "FAQ",
          href: "/resources/faq",
        },
        {
          name: "Contact Us",
          href: "/resources/contact-us",
        },
      ],
    },
    {
      groupName: "Join Us",
      groupTag: "join",
      links: [
        {
          name: "Fraternity",
          href: "/join/fraternity",
        },
        {
          name: "Why Psi Chi Omega",
          href: "/join/why",
        },
      ],
    },
  ],
};

export const navContext = React.createContext(navData.groups);
