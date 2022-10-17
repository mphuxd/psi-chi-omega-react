import React from "react";
import PropTypes from "prop-types";

function FormInputLabel({ name, htmlFor }) {
  return (
    <label className='pl-2 text-tiny font-normal font-body' htmlFor={htmlFor}>
      {name}
    </label>
  );
}

FormInputLabel.propTypes = {};

export default FormInputLabel;
