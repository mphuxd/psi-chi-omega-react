import HeaderNavBarItem from './HeaderNavBarItem';
import Link from 'next/link';
import { useContext } from 'react';
import { navContext } from '@/context/navContext';

export const HeaderNavBar = ({ isMobile }) => {
  let headerData = useContext(navContext);

  return (
    <ul aria-hidden={isMobile} className='hidden md:flex md:flex-row md:justify-between'>
      {headerData.map((group, index) => {
        return (
          <HeaderNavBarItem name={group.groupName} tag={group.groupTag} key={index}>
            {group.links.map((link, index) => {
              return (
                <li role='none' key={index}>
                  <Link
                    role='menuitem'
                    legacyBehavior={false}
                    href={link.href}
                    className='hover:underline'
                    key={index}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </HeaderNavBarItem>
        );
      })}
    </ul>
  );
};

export default HeaderNavBar;
