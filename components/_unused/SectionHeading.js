import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <div
      className={
        "flex flex-col justify-center lg:w-8/12 lg:ml-auto lg:mr-auto 2xl:w-1/2 max:w-5/12 pl-2 pr-2 md:pr-14 md:pl-14 lg:pl-12 lg:pr-12 xl:pl-20 xl:pr-20 2xl:pl-28 2xl:pr-28 2xl:mr-auto 2xl:ml-auto max:pl-0 max:pr-0 max-w-3xl"
      }
    >
      {children}
    </div>
  );
};

export default SectionHeading;
