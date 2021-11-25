import { HeaderMenuDropdown } from "./HeaderMenuDropdown";

export const HeaderNavBar = ({ navData }) => {
  //for each prop create a itemgroup
  return (
    <nav className='hidden md:flex md:flex-row md:justify-between 2xl:w-1/2'>
      {navData.map((navItem, step) => {
        //for each navdata item create a dropdown and passdown navitem as a prop
        return <HeaderMenuDropdown navItem={navItem}  key={step} />;
      })}
    </nav>
  );
};

export default HeaderNavBar;
