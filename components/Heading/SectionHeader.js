import PropTypes from "prop-types";

const SectionHeader = ({ children }) => {
  return <div className='flex flex-col col-span-full lg:col-span-8 lg:col-start-3'>{children}</div>;
};

SectionHeader.propTypes = {
  children: PropTypes.node,
};

export default SectionHeader;
