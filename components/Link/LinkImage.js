import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const LinkImage = ({ className, href, src, alt, width, height }) => {
  return (
    <Link className={className} href={href}>
      <a>
        <Image src={src} alt={alt} width={width} height={height} />
      </a>
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
