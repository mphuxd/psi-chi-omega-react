import PropTypes from "prop-types";

const FooterDescription = ({ description }) => {
  return (
    <span className='col-span-full px-2 md:col-span-7 md:px-0 md:order-1 xl:col-span-6 text--largebody'>
      {description}
    </span>
  );
};

FooterDescription.propTypes = {
  description: PropTypes.string,
};

export default FooterDescription;
