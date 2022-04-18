import PropTypes from "prop-types";

const HeaderSideNavGroup = ({ name, children }) => {
  return (
    <div className='flex flex-col text-midnight mb-8 tracking-wide'>
      <div className='mb-3'>
        <h2 className='font-medium text-lg tracking-wide header-side-nav-group__divider uppercase'>{name}</h2>
      </div>
      <div className='text-midnight flex flex-col leading-6 font-body text-base space-y-2  font-normal'>
        {children}
      </div>
    </div>
  );
};

HeaderSideNavGroup.propTypes = {};

export default HeaderSideNavGroup;
