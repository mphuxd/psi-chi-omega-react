import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/legacy/image";

const CardDefault = React.forwardRef(
  ({ srcImg, altImg, widthImg, heightImg, heading, body, linkHref, linkLabel }, ref) => {
    return (
      <Link legacyBehavior={false} className='card-default' href={linkHref} ref={ref} passHref>
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
          <div className='link--button'>
            <Image src='/link-arrow.svg' width={48} height={48} alt='Arrow' />
            <span className='text--button my-auto'>{linkLabel}</span>
          </div>
        </div>
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
