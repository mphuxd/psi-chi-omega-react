import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";

function GalleryMembers({ children }) {
  return (
    <Grid className='mt-16' isCenter={true}>
      <div className='col-span-full theme--grid_inner gap-y-8'>{children}</div>
    </Grid>
  );
}

GalleryMembers.propTypes = {};

export default GalleryMembers;
