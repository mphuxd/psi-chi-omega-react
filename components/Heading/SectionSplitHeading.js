const SectionSplitHeading = ({ title, text }) => {
  let classNames = "flex flex-col xl:flex-row xl:justify-between";
  return (
    <div className={classNames}>
      <h2 className=''>{title}</h2>
      <h3>{text}</h3>
    </div>
  );
};

export default SectionSplitHeading;
