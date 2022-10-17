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

  useEffect(() => {
    const menuButton = [document.getElementById("header-menu-button")];
    const focusableElements = 'button, a, [tabindex]:not([tabindex="-1"])';

    const modal = document.getElementById("header-side-panel");
    const modalElements = menuButton.concat(...modal.querySelectorAll(focusableElements));

    const firstElement = modalElements[0];
    const lastElement = modalElements[modalElements.length - 1];

    document.addEventListener("keydown", function (e) {
      let isTabPressed = e.key === "Tab" || e.key === 9;
      if (!isTabPressed) {
        return;
      }
      if (e.shiftKey) {
        // if shift + tab
        if (document.activeElement === firstElement) {
          //jump from top to last
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });

    firstElement.focus();
  });

  return (
    <div id='header-side-panel' className={classNames}>
      {children}
    </div>
  );
};

HeaderSidepanel.propTypes = {
  callBack: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default HeaderSidepanel;
