import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const LinkImage = ({ className, href, src, alt, width, height }) => {
  return (
    <Link legacyBehavior={false} className={className} href={href}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

LinkImage.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LinkImage;
