import cx from "classnames";

const SectionHeaderSplitOffset = ({ className, title, body, divider = false }) => {
  let classNames = cx(className, {
    ["section-header-split-offset"]: true,
    ["lg:section-header-split-offset-divider"]: divider,
  });

  return (
    <div className={classNames}>
      <h2 className='col-span-full font-bold text-2xl md:text-4xl lg:col-span-4 lg:text-6xl lg:font-semibold tracking-tight lg:font-body'>
        {title}
      </h2>
      <div className='col-span-full lg:col-span-8 relative mt-3 md:mt-4 lg:mt-0'>
        <p className='text--body'>{body}</p>
      </div>
    </div>
  );
};

export default SectionHeaderSplitOffset;
