import HeaderNavBarItem from "./HeaderNavBarItem";
import HeaderLink from "../Link/HeaderLink";

export const HeaderNavBar2 = () => {
  return (
    <nav className='hidden md:flex md:flex-row md:justify-between'>
     <HeaderNavBarItem itemName='Who We Are' itemTag='about-us'>
      <HeaderLink linkName='About Us' linkHref='/about-us'/>
      <HeaderLink linkName='Little Sis Program' linkHref='/about-us/little-sis-program'/>
      <HeaderLink linkName='History' linkHref='/about-us/history'/>
      <HeaderLink linkName='Our Commitments' linkHref='/about-us/community-involvement'/>
     </HeaderNavBarItem>
     <HeaderNavBarItem itemName='Members' itemTag='members'>
      <HeaderLink linkName='The Brothers' linkHref='/members/brothers'/>
      <HeaderLink linkName='Our Alumni' linkHref='/members/alumni'/>
     </HeaderNavBarItem>
     <HeaderNavBarItem itemName='Resources' itemTag='resources'>
      <HeaderLink linkName='COVID-19' linkHref='/resources/covid-19'/>
      <HeaderLink linkName='FAQ' linkHref='/resources/faq'/>
      <HeaderLink linkName='Contact Us' linkHref='/resources/contact-us'/>
     </HeaderNavBarItem>
     <HeaderNavBarItem itemName='Join Us' itemTag='join'>
      <HeaderLink linkName='Fraternity' linkHref='/join/fraternity'/>
      {/* <HeaderLink linkName='Little Sis' linkHref='/join/little-sis'/> */}
      <HeaderLink linkName='Why Psi Chi Omega' linkHref='/join/why'/>
     </HeaderNavBarItem>
    </nav>
  );
};

export default HeaderNavBar2;

