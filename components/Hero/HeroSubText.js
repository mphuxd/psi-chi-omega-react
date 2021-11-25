import React from "react";

const HeroSubText = ({ children }) => {
  return (
    <h2 className='text-tiny font-normal w-auto text-center font-display mt-8 max:text-2xl max:mt-6'>
      {children}
    </h2>
  );
};

export default HeroSubText;
