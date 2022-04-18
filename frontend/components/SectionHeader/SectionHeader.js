import PropTypes from "prop-types";
import cx from "classnames";
import ContentHeader from "../Content/ContentHeader";
import ContentBody from "../Content/ContentBody";
import LinkButton from "../Link/LinkButton";

const SectionHeader = ({ className, heading, copy, href = null, alt, label }) => {
  let classNames = cx(className, "flex flex-col col-span-full lg:col-span-8 lg:col-start-3");

  return (
    <div className={classNames}>
      <ContentHeader title={heading} isUppercase={false} isCenter={true} />
      <ContentBody isCenter={true} text={copy} />
      {href && <LinkButton className='mt-4 md:mt-10' href={href} alt={alt} label={label} isCenter={true} />}
    </div>
  );
};

SectionHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SectionHeader;
