import React from "react";
import PropTypes from "prop-types";
import Image from "next/legacy/image";

function FaqSearch(props) {
  return (
    <div
      id='search'
      className='mt-8 col-span-full lg:col-span-10 outline outline-1 flex flex-row p-1 lg:px-4 items-center justify-between lg:mt-0'
    >
      <input className='w-full'></input>
      <button className=''>
        <Image
          src='/images/icons/search.png'
          alt='search button'
          width={36}
          height={36}
          layout=''
        />
      </button>
    </div>
  );
}

FaqSearch.propTypes = {};

export default FaqSearch;
