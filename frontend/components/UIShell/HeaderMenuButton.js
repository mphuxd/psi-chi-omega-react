import Image from "next/image";
import PropTypes from "prop-types";

export const HeaderMenuButton = ({ onClick, isActive, isMobile }) => {
  let classNames = "flex flex-col justify-center content-center z-40 p-2 md:hidden";
  return (
    <button
      id='mobile-header-menu-button'
      onClick={onClick}
      className={classNames}
      aria-label='Open or close mobile menu'
      aria-expanded={isActive}
      aria-controls='mobile-header-side-panel'
      aria-hidden={!isMobile}
    >
      {isActive ? (
        <Image
          src='/images/icons/close.svg'
          alt='Close Menu Button'
          width={32}
          height={32}
          aria-hidden
        />
      ) : (
        <Image
          src='/images/icons/hamburger_menu.svg'
          alt='Open Menu Button'
          width={32}
          height={32}
          aria-hidden
        />
      )}
    </button>
  );
};

HeaderMenuButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default HeaderMenuButton;
