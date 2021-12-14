import PropTypes from "prop-types";

const HeroTitle = ({ text }) => {
  let classNames = "hero--title";
  return <h1 className={classNames}>{text}</h1>;
};

HeroTitle.propTypes = {
  text: PropTypes.string,
};

export default HeroTitle;
