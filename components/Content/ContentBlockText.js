import cx from "classnames";
import PropTypes from "prop-types";
import Eyebrow from "../Eyebrow/Eyebrow";

const ContentBlockText = ({ className, eyebrowLabel, header, text }) => {
  let classNames = cx(className, "flex flex-col");
  return (
    <div className={classNames}>
      <Eyebrow label={eyebrowLabel} />
      <h3 className='text--minorheadline'>{header}</h3>
      <div className='text--body pt-3'>{text}</div>
    </div>
  );
};

ContentBlockText.propTypes = {
  className: PropTypes.string,
  eyebrowLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  header: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object ]),
};

export default ContentBlockText;
