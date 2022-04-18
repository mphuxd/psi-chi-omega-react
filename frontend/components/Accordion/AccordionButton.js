import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import cx from "classnames";

function AccordionButton({ isActive }) {
  let classNames = cx({
    ["accordion-button transition-transform origin-center inline-block lg:hidden justify-center flex flex-col "]: true,
    ["accordion-button--down rotate-180"]: isActive,
    ["accordion-button-up"]: !isActive,
  });
  return (
    <div className={classNames}>
      <Image src='/images/icons/expand_more.svg' alt='Expand More' width={32} height={32} />
    </div>
  );
}

AccordionButton.propTypes = {};

export default AccordionButton;
