const CardBody = ({ className, children }) => {
  let classNames =
    "flex flex-col h-60 sm:h-auto md:h-60 justify-between bg-mist 2xl:h-80 " + className;
  return <div className={classNames}>{children}</div>;
};

export default CardBody;
