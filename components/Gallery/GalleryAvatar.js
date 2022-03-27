import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";

function GalleryAvatar({ children }) {
  return (
    <Grid className='mt-16' isCenter={true}>
      <div className='col-span-full theme-grid__inner grid-rows-3 gap-y-8'>{children}</div>
    </Grid>
  );
}

GalleryAvatar.propTypes = {};

export default GalleryAvatar;
