import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import cx from "classnames";

function ContentBlockLeftRightOffset({ left, right, center, reverse = false }) {
  let classNames = cx({
    ["gap-y-4 md:gap-y-8 lg:gap-y-0"]: true,
    ["items-center"]: center,
  });

  let leftClassNames = cx({
    ["col-span-full lg:col-span-6 lg:order-1"]: true,
    ["order-2"]: !reverse,
  });

  return (
    <Grid isCenter={true} className={classNames}>
      <div className={leftClassNames}>{left}</div>
      <div className='order-1 col-span-full lg:col-span-5 lg:order-2 lg:col-start-8'>{right}</div>
    </Grid>
  );
}

ContentBlockLeftRightOffset.propTypes = {};

export default ContentBlockLeftRightOffset;
