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
    <li className={className}>
      <h4 className='text--minorheadline'>{question}</h4>
      {/* change minor to text-xl but check for breaking changes */}
      <p className='mt-1 sm:max-w-2xl lg:max-w-none lg:mt-2 text--body'>{answer}</p>
    </li>
  );
}

FaqListItem.propTypes = {};

export default FaqListItem;
