

const SectionSplitHeader = ({ title, text}) => {
  let classNames = "flex flex-col xl:flex-row xl:gap-x-8 xl:justify-between xl:col-span-full relative section--split-header";
  return (
    <div className={classNames}>
      <h2 className='w-1/2 text--headline'>{title}</h2>
      <span className="w-1/2 text--body lg:pl-2">{text}</span>
    </div>
  );
};

export default SectionSplitHeader;
