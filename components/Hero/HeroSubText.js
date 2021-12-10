import PropTypes from "prop-types";

const HeroSubText = ({ children }) => {
  let classNames =
    "text-tiny font-normal w-auto text-center font-display mt-8 max:text-2xl max:mt-6 theme-default-layout";
  return <h2 className={classNames}>{children}</h2>;
};

HeroSubText.propTypes = {
  children: PropTypes.string,
};

export default HeroSubText;
