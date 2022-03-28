import React from "react";
import LinkButton from "../Link/LinkButton";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import cx from "classnames";

const CardDefault = React.forwardRef(
  (
    {
      srcImg,
      altImg,
      widthImg,
      heightImg,
      heading,
      body,
      linkHref,
      linkAlt,
      linkLabel,
      linkClassName,
      linkIsCenter,
    },
    ref
  ) => {
    return (
      <Link href={linkHref} ref={ref} passHref>
        <a className='card-default'>
          <div className='md:w-full'>
            <Image
              src={srcImg}
              alt={altImg}
              width={widthImg}
              height={heightImg}
              layout='responsive'
            />
          </div>
          <div className='card-default__body'>
            <div>
              <h3 className='text--minorheadline'>{heading}</h3>
              <p className='text--body mt-3 md:mt-4'>{body}</p>
            </div>
            <LinkButton
              className={linkClassName}
              href={linkHref}
              alt={linkAlt}
              label={linkLabel}
              isCenter={linkIsCenter}
            />
          </div>
        </a>
      </Link>
    );
  }
);

CardDefault.propTypes = {
  className: PropTypes.string,
  srcImg: PropTypes.string,
  altImg: PropTypes.string,
  widthImg: PropTypes.number,
  heightImg: PropTypes.number,
  heading: PropTypes.string,
  body: PropTypes.string,
  linkHref: PropTypes.string,
  linkAlt: PropTypes.string,
  linkLabel: PropTypes.string,
  linkClassName: PropTypes.string,
  linkIsCenter: PropTypes.bool,
};

CardDefault.displayName = "CardDefault";

export default CardDefault;
