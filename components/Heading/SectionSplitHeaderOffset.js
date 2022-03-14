import cx from "classnames";
import useBreakpointSize from "../../hooks/useBreakpointSize";

const SectionSplitHeaderOffset = ({ title, body, divider=false }) => {
  let dividerCSS;
  let breakPoint = useBreakpointSize();
  let className = "w-full relative py-8 theme--grid_inner";
  switch (breakPoint) {
    case "default":
      dividerCSS = "section--split-header-default";
      break;
    case "sm":
      dividerCSS = "section--split-header-default";
      break;
    case "md":
      dividerCSS = "section--split-header-default";
      break;
    case "lg":
      dividerCSS = "section--split-header";
      break;
    case "xl":
      dividerCSS = "section--split-header";
      break;
    case "2xl":
      dividerCSS = "section--split-header";
      break;
    case "max":
      dividerCSS = "section--split-header";
      break;
  }
  let classNames = cx(className, { [dividerCSS]: divider });

  return (
    <div className={classNames}>
      <h2 className='col-span-full font-bold text-2xl md:text-4xl lg:col-span-4 lg:text-6xl lg:font-semibold tracking-tight lg:font-body'>
        {title}
      </h2>
      <div className='col-span-full lg:col-span-8 relative mt-3 md:mt-4 lg:mt-0'>
        <p className='text--body lg:font-medium'>{body}</p>
      </div>
    </div>
  );
};

export default SectionSplitHeaderOffset;
