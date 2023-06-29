import HeaderNavBarItem from './HeaderNavBarItem';
import Link from 'next/link';
import { useContext } from 'react';
import { navContext } from '@/context/navContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import cx from 'classnames';
import { useRouter } from 'next/router';

export const HeaderNavBar = ({ isMobile }) => {
  let headerData = useContext(navContext);
  const router = useRouter();

  return (
    <NavigationMenu.Root aria-hidden={isMobile} className='hidden md:block'>
      <NavigationMenu.List className='hidden md:flex md:flex-row md:justify-between'>
        {headerData.map((group, index) => {
          return (
            <NavigationMenu.Item key={index} className='relative'>
              <NavigationMenu.Trigger
                className={cx('header-navbar-item', {
                  'header-menu__divider': router.pathname.includes(group.groupTag),
                })}
                onPointerMove={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                {group.groupName}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                className='header-navbar__list'
                onPointerEnter={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
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
