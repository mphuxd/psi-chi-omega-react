import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";

function LeaderSimple({heading, body}) {
  return (
    <div className="mt-24 md:mt-20 lg:my-24">
      <Grid isCenter={true}>
        <h1 className='col-span-full text--headline xl:col-span-9 uppercase'>
          {heading}
        </h1>
        <p className="col-span-full lg:col-span-8 text--body mt-4 md:mt-6 lg:mt-8">{body}</p>
      </Grid>
    </div>
  );
}

LeaderSimple.propTypes = {};

export default LeaderSimple;
