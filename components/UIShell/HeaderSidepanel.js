import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import PropTypes from "prop-types";
import cx from "classnames";

export const HeaderSidepanel = ({ callBack, isActive, children }) => {
  let className = "fixed bg-midnight h-auto min-h-screen w-screen -ml-2 overflow-x-hidden z-30";
  let display = isActive ? "inline-block" : "hidden";
  let classNames = cx(className, display);
  let size = useWindowSize();

  useEffect(() => {
    if (size[0] > 767 && isActive) {
      callBack();
    }
    return () => {};
  }, [isActive, callBack, size]);

  return <div className={classNames}>{children}</div>;
};

HeaderSidepanel.propTypes = {
  callBack: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default HeaderSidepanel;
