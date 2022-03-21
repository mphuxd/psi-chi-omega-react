import cx from "classnames";
import PropTypes from "prop-types";
import Eyebrow from "../Eyebrow/Eyebrow";

const ContentBlockText = ({ className, eyebrowLabel, header, headerStyle = "minor", text, headerIsUppercase}) => {
  let classNames = cx(className, "flex flex-col");
  let textStyle = cx({
    ["text--miniheadline"]: headerStyle === "mini",
    ["text--minorheadline"]: headerStyle === "minor",
    ["uppercase"]:headerIsUppercase,
  });
  return (
    <div className={classNames}>
      <Eyebrow label={eyebrowLabel} />
      <h3 className={textStyle}>{header}</h3>
      <div className='text--body pt-3'>{text}</div>
    </div>
  );
};

ContentBlockText.propTypes = {
  className: PropTypes.string,
  eyebrowLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  header: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ContentBlockText;
