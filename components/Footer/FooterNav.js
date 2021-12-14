import { navContext } from "../../context/nav-context";
import { useContext } from "react";
import FooterNavGroup from "./FooterNavGroup";
import cx from "classnames";
import PropTypes from "prop-types";

const FooterNav = ({ className }) => {
  let navData = useContext(navContext);
  let classNames = cx('footer--nav', className);

  return (
    <div className={classNames}>
      {navData.map((navItem, step) => {
        return <FooterNavGroup key={step} navItem={navItem} />;
      })}
    </div>
  );
};

FooterNav.propTypes = {
  className: PropTypes.string,
};

export default FooterNav;
