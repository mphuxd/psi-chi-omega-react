import Image from "next/image";
import PropTypes from "prop-types";

export const HeaderMenuButton = ({ onClick, isActive }) => {
  let classNames = "flex flex-col justify-center content-center z-40 p-2 md:hidden";
  return (
    <button
      id="header-menu-button"
      tabIndex={0}
      onClick={onClick}
      className={classNames}
      aria-label='Open or close mobile menu'
    >
      {isActive ? (
        <Image src='/images/icons/close.svg' alt='Close Menu Button' width={32} height={32} />
      ) : (
        <Image
          src='/images/icons/hamburger_menu.svg'
          alt='Open Menu Button'
          width={32}
          height={32}
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
