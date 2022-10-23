import cx from "classnames";
import PropTypes from "prop-types";
import { useContext } from "react";
import { navContext } from "../../context/navContext";
import FooterNavGroup from "./FooterNavGroup";
import Link from "next/link";

function FooterNav() {
  let classNames = cx("footer-nav");
  let navData = useContext(navContext);
  let footerNav = navData.map((group, index) => {
    return (
      <FooterNavGroup name={group.groupName} key={index}>
        {group.links.map((link, index) => {
          return (
            <Link legacyBehavior={false} className='w-fit hover:underline' href={link.href} key={index}>
              {link.name}
            </Link>
          );
        })}
      </FooterNavGroup>
    );
  });

  return <div className={classNames}>{footerNav}</div>;
}

FooterNav.propTypes = {
  className: PropTypes.string,
};

export default FooterNav;
