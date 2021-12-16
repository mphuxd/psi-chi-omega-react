import PropTypes from "prop-types";
import cx from 'classnames'

const HeroSubText = ({ className, text }) => {
  let classNames = cx("hero--subtext", className);
  return <h2 className={classNames}>{text}</h2>;
};

HeroSubText.propTypes = {
  text: PropTypes.string,
};

export default HeroSubText;
