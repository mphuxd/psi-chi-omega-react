import cx from "classnames";
import useBreakpointSize from "../../hooks/useBreakpointSize";

const SectionHeaderSplitOffset = ({ className, title, body, divider = false }) => {
  let dividerCSS;
  let breakPoint = useBreakpointSize();
  switch (breakPoint) {
    case "lg":
      dividerCSS = "section--split-header-offset-divider";
      break;
    case "xl":
      dividerCSS = "section--split-header-offset-divider";
      break;
    case "2xl":
      dividerCSS = "section--split-header-offset-divider";
      break;
    case "max":
      dividerCSS = "section--split-header-offset-divider";
      break;
  }
  let classNames = cx(className, {
    ["section--split-header-offset"]: true,
    [dividerCSS]: divider,
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
