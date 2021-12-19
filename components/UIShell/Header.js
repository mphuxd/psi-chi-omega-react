import cx from "classnames";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const Header = ({ isActive, children }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  let classNames = cx(
    { header: true },
    { fixed: isActive },
    { "animate__animated animate__fadeInDown animate__faster": false }
    //disabled for now
  );
  return (
    <header ref={ref} className={classNames}>
      {children}
    </header>
  );
};

Header.propTypes = {
  isActive: PropTypes.bool,
  classNames: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
