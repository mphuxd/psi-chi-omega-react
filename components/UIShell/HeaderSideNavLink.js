import PropTypes from "prop-types";

const HeaderSideNavLink = ({ navLink, step }) => {
  return <div key={step}>{navLink}</div>;
};

HeaderSideNavLink.propTypes = {
  navLink: PropTypes.object,
  step: PropTypes.number,
};

export default HeaderSideNavLink;
