import PropTypes from "prop-types";
import LinkNav from "../Link/LinkNavGroup";

const HeaderSideNavGroup = ({ navItem, step }) => {
  return (
    <div key={step} className='flex flex-col text-white mb-6 tracking-wide'>
      <div className='mb-2'>
        <h2 className='font-medium text-base tracking-wide section--heading '>
          {navItem.link.toUpperCase()}
        </h2>
      </div>
      <div className='flex flex-col leading-6 font-body text-tiny font-light'>
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
