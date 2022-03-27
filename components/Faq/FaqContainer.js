import React from "react";
import Grid from "../Grid/Grid";
import FaqSearch from "./FaqSearch";

function FaqContainer({ children }) {
  return (
    <Grid isCenter={true}>
      {/* <FaqSearch /> */}
      <section className='theme-grid__inner col-span-full mt-12 lg:mt-0'>{children}</section>
    </Grid>
  );
}

FaqContainer.propTypes = {};

export default FaqContainer;
