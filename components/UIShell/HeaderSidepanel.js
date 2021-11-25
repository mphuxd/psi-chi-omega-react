export const HeaderSidepanel = ({ isActive, children }) => {
  let className = " absolute bg-midnight h-screen w-screen";
  let display = isActive ? " block" : " hidden";
  className = className + display;
  return (
    <div className={className}>
        {children}
    </div>
  );
};

export default HeaderSidepanel;
