import classNames from "classnames";
import cx from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ isActive, children }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const showHeader = () => {
    const minOffset = 3; // wiggle room
    if (window) {
      if (window.scrollY > lastScrollY + minOffset && window.scrollY) {
        setShow(false);
      } else if (
        (window.scrollY < lastScrollY - minOffset && window.scrollY) ||
        window.scrollY === 0
      ) {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showHeader);
      return () => {
        window.removeEventListener("scroll", showHeader);
      };
    }
  });

  let classNames = cx(
    { "header transition-all duration-150 sticky mx-auto": true },
    { "fixed opacity-100": isActive },
    { "opacity-0 md:opacity-100 ": !show && !isActive },
    { "fixed opacity-100": show },
  );
  return (
    <header className="w-full fixed z-10 md:bg-white md:bg-opacity-50 md:backdrop-filter md:backdrop-blur-md">
      <div className={classNames}>{children}</div>
    </header>
  );
};
Header.propTypes = {
  isActive: PropTypes.bool,
  classNames: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
