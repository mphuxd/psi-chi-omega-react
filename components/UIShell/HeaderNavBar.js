import HeaderNavBarItem from "./HeaderNavBarItem";
import Link from "next/link";
import { useContext } from "react";
import { navContext } from "@/context/navContext";

export const HeaderNavBar = () => {
  let headerData = useContext(navContext);
  let headerNav = headerData.map((group, index) => {
    return (
      <HeaderNavBarItem name={group.groupName} tag={group.groupTag} key={index}>
        {group.links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          );
        })}
      </HeaderNavBarItem>
    );
  });

  return <nav className='hidden md:flex md:flex-row md:justify-between'>{headerNav}</nav>;
};

export default HeaderNavBar;

//alternatively use a callback to setactive group.
