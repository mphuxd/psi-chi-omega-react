export const HeaderMenuButton = ({ onClick, isActive }) => {
  let MenuButtonSrc = isActive ? "/hamburger_close.svg" : "/hamburger_menu.svg";
  return (
    <button
      onClick={onClick}
      className='mr-2 flex flex-col justify-center content-center z-10 md:hidden'
    >
      <img src={MenuButtonSrc} alt='Menu Button' className='p-2' />
    </button>
  );
};

export default HeaderMenuButton;
