import HeaderNavBarItem from './HeaderNavBarItem';
import Link from 'next/link';
import { useContext } from 'react';
import { navContext } from '@/context/navContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const HeaderNavBar = ({ isMobile }) => {
  let headerData = useContext(navContext);

  return (
    // <ul aria-hidden={isMobile} className='hidden md:flex md:flex-row md:justify-between'>
    //   {headerData.map((group, index) => {
    //     return (
    //       <HeaderNavBarItem name={group.groupName} tag={group.groupTag} key={index}>
    //         {group.links.map((link, index) => {
    //           return (
    //             <li role='none' key={index}>
    //               <Link
    //                 role='menuitem'
    //                 legacyBehavior={false}
    //                 href={link.href}
    //                 className='hover:underline'
    //                 key={index}
    //               >
    //                 {link.name}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </HeaderNavBarItem>
    //     );
    //   })}
    // </ul>

    <NavigationMenu.Root aria-hidden={isMobile} className='hidden md:block'>
      <NavigationMenu.List className='hidden md:flex md:flex-row md:justify-between'>
        {headerData.map((group, index) => {
          return (
            <NavigationMenu.Item key={index} className='relative'>
              <NavigationMenu.Trigger className='header-navbar-item'>
                {group.groupName}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className='header-navbar__list'>
                {group.links.map((link, index) => {
                  return (
                    <NavigationMenu.Link asChild className='hover:underline' key={index}>
                      <Link href={link.href}>{link.name}</Link>
                    </NavigationMenu.Link>
                  );
                })}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default HeaderNavBar;
