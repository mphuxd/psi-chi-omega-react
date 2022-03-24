import PropTypes from "prop-types";

const Eyebrow = ({ label = null }) => {
  return <>{label && <span className='eyebrow'>{label}</span>}</>;
};

Eyebrow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string]),
};

export default Eyebrow;
