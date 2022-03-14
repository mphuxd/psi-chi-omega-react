import React from "react";
import LinkButton from "../Link/LinkButton";
import PropTypes from "prop-types";
import Image from "next/image";
import cx from "classnames";

const CardDefault = React.forwardRef(
  (
    {
      className,
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
      inView,
      entry,
      animateClassNames,
    },
    ref
  ) => {
    let classNames = cx(className, animateClassNames, {
      "card--default-layout": true,
      "animate__animated animate__fadeInUp animate-duration-500ms animate-ease-out-quintic opacity-100": false,
    });
    return (
      <div ref={ref} className={classNames}>
        <div className='sm:w-1/2 md:w-full'>
          <Image
            src={srcImg}
            alt={altImg}
            width={widthImg}
            height={heightImg}
            layout='responsive'
          />
        </div>
        <div className='flex flex-col h-60 sm:h-auto sm:w-1/2 md:w-full md:h-72 justify-between bg-mist 2xl:h-80 p-4'>
          <div>
            <h3 className='text--minorheadline'>{heading}</h3>
            <p className='text--body mt-3'>{body}</p>
          </div>
          <LinkButton
            className={linkClassName}
            href={linkHref}
            alt={linkAlt}
            label={linkLabel}
            isCenter={linkIsCenter}
          />
        </div>
      </div>
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
