import classNames from "classnames";
import cx from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ isActive, children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleShowHeader = () => {
    const minOffset = 3; // wiggle room
    if (window) {
      if (window.scrollY > lastScrollY + minOffset && window.scrollY) {
        setIsVisible(false);
      } else if (
        (window.scrollY < lastScrollY - minOffset && window.scrollY) ||
        window.scrollY === 0
      ) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleShowHeader);
      return () => {
        window.removeEventListener("scroll", handleShowHeader);
      };
    }
  });

  let classNames = cx(
    {
      "transition-all fixed duration-150 mx-auto w-full z-10 bg-white md:bg-opacity-80 backdrop-filter backdrop-blur-lg": true,
    },
    { "fixed opacity-100": isActive || isVisible },
    { "opacity-0 md:opacity-100 ": !isVisible && !isActive }
  );
  return (
    <header className={classNames}>
      <div className='header'>{children}</div>
    </header>
  );
};
Header.propTypes = {
  isActive: PropTypes.bool,
  classNames: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
