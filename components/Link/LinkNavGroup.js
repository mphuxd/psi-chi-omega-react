import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const convertToUrl = (string) => {
  let URL = string.toLowerCase();
  return URL.replace(/ /g, "-");
};

const LinkNav = ({ navItem, navLink }) => {
  return <Link href={`/${convertToUrl(navItem.link)}/${convertToUrl(navLink)}`}>{navLink}</Link>;
};

LinkNav.propTypes = {
  navItem: PropTypes.object,
  navLink: PropTypes.string,
};

export default LinkNav;
