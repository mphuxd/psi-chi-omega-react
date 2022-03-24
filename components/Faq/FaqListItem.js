import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function FaqListItem({ question, answer, category, label }) {
  let className = cx({
    ["block"]: category === "All FAQs",
    ["hidden"]: category != label && category != "All FAQs",
    ["block"]: category === label,
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
