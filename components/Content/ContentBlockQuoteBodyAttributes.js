import cx from "classnames";
import PropTypes from "prop-types";

const ContentBlockQuoteBodyAttributes = ({ className, quoteAuthor, quoteAuthorSubtext }) => {
  let classNames = cx(className, "content-block--quote_body-attributes");
  return (
    <div className={classNames}>
      <span className='text--miniheadline'>{quoteAuthor}</span>
      <span className='text--body'>{quoteAuthorSubtext}</span>
    </div>
  );
};

ContentBlockQuoteBodyAttributes.propTypes = {
  className: PropTypes.string,
  quoteAuthor: PropTypes.string,
  quoteAuthorSubtext: PropTypes.string,
};

export default ContentBlockQuoteBodyAttributes;
