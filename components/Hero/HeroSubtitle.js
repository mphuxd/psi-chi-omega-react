import PropTypes from "prop-types";

const HeroSubtitle = ({ children }) => {
  let classNames = "text-3xl w-auto text-center font-display theme-default-layout";
  return <h1 className={classNames}>{children}</h1>;
};

HeroSubtitle.propTypes = {
  children: PropTypes.string,
};

export default HeroSubtitle;
