import React from "react";
import PropTypes from "prop-types";

function FaqFilterDesktop({ filterList, activeFilter }) {
  return (
    <section
      aria-label='FAQ filter for desktop screens.'
      aria-controls='faq-list'
      id='filter-desktop'
      className='hidden lg:flex flex-col space-y-1'
    >
      <h3 className='font-bold'>CATEGORIES</h3>
      {filterList}
    </section>
  );
}

FaqFilterDesktop.propTypes = {};

export default FaqFilterDesktop;
