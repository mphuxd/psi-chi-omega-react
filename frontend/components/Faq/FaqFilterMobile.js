import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";

function FaqFilterMobile({ filterList }) {
  const [isActive, setActive] = useState(false);

  let buttonClass = cx({
    ["text-center w-full mx-auto py-3 outline outline-1 font-bold"]: true,
    ["hidden"]: isActive,
    ["block"]: !isActive,
  });

  let filterClass = cx({
    ["outline outline-1 px-4 pt-2 pb-4"]: true,
    ["block"]: isActive,
    ["hidden"]: !isActive,
  });

  function handleExpand(event) {
    setActive(!isActive);
  }

  return (
    <div id='filter-mobile' className='w-full lg:hidden'>
      <button
        aria-expanded={isActive}
        aria-label='Expand Mobile Filter to select FAQ topics.'
        aria-controls='filter-mobile-expanded'
        id='filter-closed'
        className={buttonClass}
        onClick={handleExpand}
      >
        <span aria-hidden>Select FAQ Topics</span>
      </button>
      <div id='filter-mobile-expanded' className={filterClass}>
        <div className='flex flex-row justify-between items-center pb-4'>
          <span id="mobile-filter-title" className='uppercase text-body font-bold'>Categories</span>
          <button
            aria-label='Collapse Mobile Filter'
            aria-controls='filter-mobile-expanded'
            className='h-[32px] w-[32px] p-1'
            onClick={handleExpand}
          >
            <Image
              src='/images/icons/close.png'
              alt='Close filter'
              width={36}
              height={36}
              layout='responsive'
            />
          </button>
        </div>
        {filterList}
      </div>
    </div>
  );
}

FaqFilterMobile.propTypes = {};

export default FaqFilterMobile;
