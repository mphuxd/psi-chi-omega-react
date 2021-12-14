import PropTypes from "prop-types";

const Eyebrow = ({ label }) => {
  let eyebrow = null;

  if (label) {
    let newLabel = label.toUpperCase();
    eyebrow = <span className='text--caption mb-3 sm:mb-4 xl:mb-5'>{newLabel}</span>;
  }
  return eyebrow;
};

Eyebrow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Eyebrow;
