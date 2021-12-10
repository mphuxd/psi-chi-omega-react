import Link from "next/link";
import LinkButton from "../Link/LinkButton";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import cx from "classnames";

const ContentBlockQuote = ({
  className = "",
  isReversed,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  hasEyebrow,
  eyebrowLabel,
  header,
  quote,
  quoteAuthor,
  quoteAuthorSubtext,
  linkHref,
  linkClassName,
  linkAlt,
  label,
  linkIsCenter,
}) => {
  let classNames = cx(className, "col-span-full mt-8 flex flex-col text-white xl:mt-24");

  let imgClassNames = " sm:w-1/2 object-cover ";
  let bodyClassNames = " sm:w-1/2 ";

  if (isReversed) {
    classNames += " sm:flex-row-reverse";
    imgClassNames += " sm:pl-2 lg:pl-4";
    bodyClassNames += " sm:pr-2 lg:pr-4";
  } else {
    classNames += " sm:flex-row";
    imgClassNames += " sm:pr-2 lg:pr-4";
    bodyClassNames += " sm:pl-2 lg:pl-4";
  }

  let Eyebrow;
  if (hasEyebrow) {
    Eyebrow = <h3>{eyebrowLabel}</h3>;
  } else {
    Eyebrow = null;
  }

  return (
    <div className={classNames}>
      <div className={imgClassNames}>
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} layout='responsive' />
      </div>
      <div className={bodyClassNames}>
        <div className='flex flex-col mt-4 h-72 justify-between px-2'>
          <div className='flex flex-col '>
            <div className='flex flex-col'>
              {Eyebrow}
              <h4 className='font-bold text-lg leading-6 sm:text-2xl font-body sm:leading-8'>
                {header}
              </h4>
            </div>
            <p className='font-body font-light tracking-wide text-tiny leading-5 pt-3 md:text-base md:leading-6 xl:text-lg xl:leading-7'>
              {quote}
            </p>
          </div>
          <div className='text-right sm:text-left'>
            <h5 className='font-bold text-base leading-6 xl:text-lg xl:font-medium  '>
              {quoteAuthor}
            </h5>
            <span className='font-body font-light tracking-wide text-tiny leading-5 xl:text-lg xl:leading-6 '>
              {quoteAuthorSubtext}
            </span>
          </div>
          <Link href={linkHref} passHref>
            <LinkButton
              className={linkClassName}
              alt={linkAlt}
              label={label}
              isCenter={linkIsCenter}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

ContentBlockQuote.propType = {
  isReversed: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  eyebrow: PropTypes.string,
  eyebrowLabel: PropTypes.string,
  header: PropTypes.string,
  quote: PropTypes.string,
  quoteAuthor: PropTypes.string,
  quoteAuthorSubtext: PropTypes.string,
  linkHref: PropTypes.string,
  linkClassName: PropTypes.string,
  linkAlt: PropTypes.string,
  label: PropTypes.string,
  linkIsCenter: PropTypes.bool,
};

export default ContentBlockQuote;
