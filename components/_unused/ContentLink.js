import React from "react";

const ContentLink = ({ src, isCenter, children }) => {
  let linkPosition = isCenter ? "justify-center" : "";
  let classNames = "flex flex-row mt-10 " + linkPosition;
  return (
    <div className={classNames}>
      <a href={src}>
        <img src='link-arrow.svg' alt='Go to About Us Page' />
      </a>
      <a className='font-body font-medium text-lg mt-auto mb-auto' href={src}>
        {children}
      </a>
    </div>
  );
};

export default ContentLink;

//replace with LinkButton
