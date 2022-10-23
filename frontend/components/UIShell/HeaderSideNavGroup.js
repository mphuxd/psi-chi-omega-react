import PropTypes from "prop-types";

const HeaderSideNavGroup = ({ name, children }) => {
  return (
    <li className='mobile-header-menu-group'>
      <div aria-hidden className='mb-3'>
        <h2 className='font-medium text-lg tracking-wide header-side-nav-group__divider uppercase mb-3'>
          {name}
        </h2>
      </div>
      <ul aria-label={name} className='mobile-header-menu-group-links'>
        {children}
      </ul>
    </li>
  );
};

HeaderSideNavGroup.propTypes = {};

export default HeaderSideNavGroup;
