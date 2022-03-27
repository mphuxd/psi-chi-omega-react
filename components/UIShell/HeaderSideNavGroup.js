import PropTypes from "prop-types";

const HeaderSideNavGroup = ({ name, children }) => {
  return (
    <div className='flex flex-col text-midnight mb-6 tracking-wide'>
      <div className='mb-2'>
        <h2 className='font-medium text-base tracking-wide header-side-nav-group__divider uppercase'>{name}</h2>
      </div>
      <div className='text-midnight flex flex-col leading-6 font-body text-tiny font-normal'>
        {children}
      </div>
    </div>
  );
};

HeaderSideNavGroup.propTypes = {};

export default HeaderSideNavGroup;
