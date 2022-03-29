import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import cx from "classnames";

function CarouselPagNext({ isEnd }) {
  let classNames = cx({ ["pag-next ml-2"]: true, ["opacity-50"]: isEnd });
  return (
    <button className={classNames}>
      <Image src='/pag-next.svg' alt='Next Slide' width={56} height={56} />
    </button>
  );
}

CarouselPagNext.propTypes = {};

export default CarouselPagNext;
