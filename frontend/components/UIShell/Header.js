import cx from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ isActive, children }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const showHeader = () => {
    if (window) {
      if (window.scrollY > lastScrollY && window.scrollY) {
        setShow(false);
      } else {
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
    { header: true },
    { "fixed opacity-100 md:static": isActive },
    { "fixed opacity-100 md:static": show },
    { "opacity-0 md:opacity-100 md:static": !show && !isActive }
  );
  return (
    <header>
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
