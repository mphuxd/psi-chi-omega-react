import PropTypes from "prop-types";

const FooterAttributes = ({ text }) => {
  return (
    <span className='col-span-full mt-6 font-light text-xs text-silver text-center pb-8 sm:order-5 md:order-5'>
      {text}
    </span>
  );
};

FooterAttributes.propTypes = {
  text: PropTypes.string,
};

export default FooterAttributes;
