import { navContext } from "../../context/nav-context";
import { useContext } from "react";
import FooterNavGroup from "./FooterNavGroup";
import cx from "classnames";
import PropTypes from "prop-types";

const FooterNav = ({ className }) => {
  let navData = useContext(navContext);
  let defaultClassnames =
    "px-2 mt-16 grid grid-cols-2 gap-y-12 gap-x-4 col-span-full md:grid-cols-4 md:px-0 md:col-span-9 md:order-4 xl:col-span-7 xl:col-start-5 xl:mt-4";
  let classNames = cx(defaultClassnames, className);

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
