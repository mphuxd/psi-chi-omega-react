import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import cx from "classnames";
function LeaderSimple({ heading, body, children, upperCase = true }) {
  let className = cx({ 
    ['uppercase']: upperCase,
    ["col-span-full text--headline xl:col-span-9"]: true });
  return (
    <div className='mt-24 md:mt-40 lg:my-24 2xl:mt-32'>
      <Grid isCenter={true}>
        <h1 className={className}>{heading}</h1>
        <p className='col-span-full lg:col-span-8 text--body mt-4 md:mt-6 lg:mt-8'>{body}</p>
        {children}
      </Grid>
    </div>
  );
}

LeaderSimple.propTypes = {};

export default LeaderSimple;
