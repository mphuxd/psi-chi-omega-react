import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function FaqListItem({ question, answer, category, type }) {
  let className = cx({
    ["block"]: category === "all",
    ["hidden"]: category != type && category != 'all',
    ["block"]: category === type,
  });
  return (
    <li id='faq-item' className={className}>
      <span className='text--minorheadline'>{question}</span>
      <p className='mt-1 sm:max-w-2xl lg:max-w-none lg:mt-2'>{answer}</p>
    </li>
  );
}

FaqListItem.propTypes = {};

export default FaqListItem;
