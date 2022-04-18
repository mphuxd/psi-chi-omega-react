import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function FormInputContainer({ children, className }) {
  let classNames = cx(className, {
    ["col-span-full sm:col-span-4 md:col-span-6 lg:col-span-4 flex flex-col relative form-input__divider"]: true,
  });

  return <div className={classNames}>{children}</div>;
}

FormInputContainer.propTypes = {};

export default FormInputContainer;
