import React from "react";
import PropTypes from "prop-types";
import Image from "next/legacy/image";
import cx from "classnames";

function CarouselPagPrev({ isStart }) {
  let classNames = cx({ ["pag-prev mr-2"]: true, ["opacity-50"]: isStart });
  return (
    <button className={classNames}>
      <Image src='/pag-prev.svg' alt='Previous Slide' width={56} height={56} />
    </button>
  );
}

CarouselPagPrev.propTypes = {};

export default CarouselPagPrev;
