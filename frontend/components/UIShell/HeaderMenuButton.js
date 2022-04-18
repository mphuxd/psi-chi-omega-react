import Image from "next/image";
import PropTypes from "prop-types";

export const HeaderMenuButton = ({ onClick, isActive }) => {
  let MenuButtonSrc = isActive ? "/images/icons/close.svg" : "/images/icons/hamburger_menu.svg";
  let classNames = "flex flex-col justify-center content-center z-40 p-2 md:hidden";
  return (
    <button onClick={onClick} className={classNames}>
      <Image src={MenuButtonSrc} alt='Menu Button' width={32} height={32} />
    </button>
  );
};

HeaderMenuButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default HeaderMenuButton;
