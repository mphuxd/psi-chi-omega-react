import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import FaqFilterDesktop from "./FaqFilterDesktop";
import FaqFilterMobile from "./FaqFilterMobile";

function FaqFilter({ mobileList, desktopList }) {
  return (
    <div id='filter' className='col-span-full lg:col-span-3'>
      <FaqFilterMobile filterList={mobileList} />
      <FaqFilterDesktop filterList={desktopList} />
    </div>
  );
}

FaqFilter.propTypes = {};

export default FaqFilter;

//how do we generate all filter items from one source
//prop or children
//two props for each
