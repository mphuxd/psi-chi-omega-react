import PropTypes from "prop-types";

const HeroTitle = ({ children }) => {
  let classNames =
    "text-4xl font-normal w-auto text-center font-display md:text-7xl theme-default-layout col-span-full";
  return <h1 className={classNames}>{children}</h1>;
};

HeroTitle.propTypes = {
  children: PropTypes.string,
};

export default HeroTitle;
