import cx from "classnames";
import Image from "next/legacy/image";
import PropTypes from "prop-types";

const HeroMediaControl = ({ className }) => {
  let defaultClassNames = "h-12 w-12 mr-auto ml-auto mt-6";
  let classNames = cx(defaultClassNames, className);
  return (
    <button className={classNames}>
      <Image src='/hero_play.svg' alt='Button to play or pause Hero Media' width={48} height={48} />
    </button>
  );
};

HeroMediaControl.propTypes = {
  className: PropTypes.string,
};

export default HeroMediaControl;

/* implement state to control media and button img */
