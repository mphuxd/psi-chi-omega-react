import PropTypes from "prop-types";
import LinkNav from "../Link/LinkNavGroup";

const HeaderSideNavGroup = ({ navItem, step }) => {
  return (
    <div key={step} className='flex flex-col text-white'>
      <div className='mb-3'>
        <h2 className='font-semibold text-base section-heading'>{navItem.link}</h2>
      </div>
      <div className='flex flex-col'>
        {navItem.sublinks.map((navLink, step) => {
          return <LinkNav key={step} navItem={navItem} navLink={navLink} />;
        })}
      </div>
    </div>
  );
};

HeaderSideNavGroup.propTypes = {
  navItem: PropTypes.object,
  step: PropTypes.number,
};

export default HeaderSideNavGroup;
