import PropTypes from "prop-types";

const FooterNavGroup = ({ name, children }) => {
  return (
    <div className='flex flex-col font-light text-base md:text-tiny gap-y-2'>
      <h3 className='font-semibold mb-1'>{name}</h3>
      {children}
    </div>
  );
};

FooterNavGroup.propTypes = {
  navItem: PropTypes.object,
};

export default FooterNavGroup;
