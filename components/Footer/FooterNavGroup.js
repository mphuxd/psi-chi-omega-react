import LinkNav from "../Link/LinkNavGroup";
import PropTypes from "prop-types";

const FooterNavGroup = ({ navItem }) => {
  return (
    <div className='flex flex-col font-light text-tiny gap-y-1'>
      <h3 className='font-semibold mb-1'>{navItem.link}</h3>
      {navItem.sublinks.map((navLink, step) => {
        return <LinkNav key={step} navItem={navItem} navLink={navLink} />;
      })}
    </div>
  );
};

FooterNavGroup.propTypes = {
  navItem: PropTypes.object,
};

export default FooterNavGroup;
