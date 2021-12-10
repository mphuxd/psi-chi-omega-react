import PropTypes from "prop-types";

const ContentBody = ({ text }) => {
  return (
    <p className='text-center font-body text-tiny font-light leading-5 mt-4 md:text-lg md:leading-7'>
      {text}
    </p>
  );
};

ContentBody.propTypes = {
  text: PropTypes.string,
};

export default ContentBody;
