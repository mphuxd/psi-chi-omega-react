import React from "react";
import PropTypes from "prop-types";

function FaqList({children}) {
  return (
    <ol id='faq-list' className='mt-12 lg:mt-0 col-span-full space-y-8 md:space-y-12 lg:col-span-7 lg:space-y-16'>
      {children}
    </ol>
  );
}

FaqList.propTypes = {};

export default FaqList;
