import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import PropTypes from "prop-types";
import cx from "classnames";

export const HeaderSidepanel = ({ callBack, isActive, children }) => {
  let classNames = cx({
    "header-side-panel--white": true,
    "header-side-panel--active": isActive,
    "header-side-panel--closed": !isActive,
  });
  let size = useWindowSize();

  useEffect(() => {
    if (size[0] > 767 && isActive) {
      callBack(); //setIsActive
    }
  }, [isActive, callBack, size]);

  return <div className={classNames}>{children}</div>;
};

HeaderSidepanel.propTypes = {
  callBack: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default HeaderSidepanel;
