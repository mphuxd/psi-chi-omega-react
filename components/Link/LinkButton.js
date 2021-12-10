import React from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import PropTypes from "prop-types";

const LinkButton = React.forwardRef(({ className, onClick, href, alt, label, isCenter }, ref) => {
  let linkPosition = isCenter ? " justify-center" : "";
  let classNames = cx("inline-flex flex-row", className, linkPosition);
  return (
    <Link href={href} passHref>
      <a className={classNames} href={href} onClick={onClick} ref={ref} alt={alt}>
        <Image src='/link-arrow.svg' width={48} height={48} alt={alt} />
        <button className='font-body font-medium text-lg mt-auto mb-auto'>{label}</button>
      </a>
    </Link>
  );
});

LinkButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  isCenter: PropTypes.bool,
};

LinkButton.displayName = "LinkButton";

export default LinkButton;

//Replace inner button with button component
