import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";

function GalleryMembers({ children }) {
  return (
    <Grid className='mt:8 md:mt-10 lg:mt-20' isCenter={true}>
      <div className='col-span-full theme-grid__inner gap-y-8'>{children}</div>
    </Grid>
  );
}

GalleryMembers.propTypes = {};

export default GalleryMembers;
