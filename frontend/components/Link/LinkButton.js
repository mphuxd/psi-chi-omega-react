import React from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import PropTypes from "prop-types";

const LinkButton = React.forwardRef(
  ({ className, onClick, href, label, isCenter, isUppercase, linkAlt, underline = false }, ref) => {
    let classNames = cx(
      className,
      "link--button",
      { "mx-auto": isCenter },
      { uppercase: isUppercase },
      { "hover:underline": underline }
    );
    return (
      <Link href={href} passHref>
        <a aria-label={linkAlt ? linkAlt : undefined} className={classNames} href={href} onClick={onClick} ref={ref}>
          <Image src='/link-arrow.svg' width={48} height={48} alt='Arrow' />
          <span className='text--button my-auto'>{label}</span>
        </a>
      </Link>
    );
  }
);

LinkButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  isCenter: PropTypes.bool,
  isUppercase: PropTypes.bool,
};

LinkButton.displayName = "LinkButton";

export default LinkButton;

//Replace inner button with button component
