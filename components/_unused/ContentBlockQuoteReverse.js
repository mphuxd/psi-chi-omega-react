import React from "react";
import Link from "next/link";
import LinkButton from "../Link/LinkButton";

const ContentBlockQuoteReverse = ({
  className='',
  imgSrc,
  imgAlt,
  eyebrow,
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
    let classNames = className + ' col-span-full mt-8 flex flex-col-reverse sm:flex-row text-white  xl:mt-24'
  let Eyebrow;
  if (eyebrow) {
    Eyebrow = <h3>{eyebrowLabel}</h3>;
  } else {
    Eyebrow = null;
  }

  return (
    <div className={classNames}>
      <div className='sm:w-1/2 sm:pr-2 xl:pr-4'>
        <div className='flex flex-col mt-4 h-72 justify-between px-2'>
          <div className='flex flex-col  '>
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
      <img className='sm:w-1/2 sm:pl-2 xl:pl-4 object-cover' src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default ContentBlockQuoteReverse
