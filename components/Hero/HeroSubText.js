import PropTypes from "prop-types";

const HeroSubText = ({ text }) => {
  let classNames = "hero--subtext";
  return <h2 className={classNames}>{text}</h2>;
};

HeroSubText.propTypes = {
  text: PropTypes.string,
};

export default HeroSubText;
