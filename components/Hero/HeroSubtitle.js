import PropTypes from "prop-types";

const HeroSubtitle = ({ text }) => {
  let classNames = "hero--subtitle";
  return <h1 className={classNames}>{text}</h1>;
};

HeroSubtitle.propTypes = {
  text: PropTypes.string,
};

export default HeroSubtitle;
