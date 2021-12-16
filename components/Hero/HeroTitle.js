import PropTypes from "prop-types";
import cx from 'classnames'

const HeroTitle = ({ className, text }) => {
  let classNames = cx("hero--title", className);
  return <h1 className={classNames}>{text}</h1>;
};

HeroTitle.propTypes = {
  text: PropTypes.string,
};

export default HeroTitle;
