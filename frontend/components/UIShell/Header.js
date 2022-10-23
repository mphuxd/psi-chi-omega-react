import cx from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";

const Header = ({ isActive, children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const handleScroll = useCallback(() => {
    const minOffset = 3; // wiggle room
    if (window) {
      if (window.scrollY > lastScrollY + minOffset && window.scrollY) {
        setIsVisible(false);
        //scroll down
      } else if (window.scrollY < lastScrollY - minOffset && window.scrollY) {
        setIsVisible(true);
        //scroll up
      }

      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }

      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  let classNames = cx({
    header: true,
    "opacity-100": isActive || isVisible,
    "opacity-0 md:opacity-100": !isVisible && !isActive,
    "bg-white md:bg-opacity-80": !atTop,
  });

  let innerClassNames = cx("header-inner", {
    "border-opacity-100": !atTop,
    "border-opacity-0": atTop,
  });

  return (
    <header className={classNames}>
      <nav className={innerClassNames}>{children}</nav>
    </header>
  );
};
Header.propTypes = {
  isActive: PropTypes.bool,
  classNames: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
