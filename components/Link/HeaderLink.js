import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";


const HeaderLink = ({ linkName, linkHref }) => {
  return <Link href={linkHref}>{linkName}</Link>;
};

HeaderLink.propTypes = {
  linkName: PropTypes.string,
  navItem: PropTypes.object,
  navLink: PropTypes.string,
};

export default HeaderLink;
