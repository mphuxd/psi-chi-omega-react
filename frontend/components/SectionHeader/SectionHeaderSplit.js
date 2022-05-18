import cx from "classnames";
import useBreakpointSize from "../../hooks/useBreakpointSize";
import LinkButton from "../Link/LinkButton";

const SectionHeaderSplit = ({ leftText, rightText, href, alt, label, divider, button = false }) => {
  let dividerCSS;
  let breakPoint = useBreakpointSize();
  let className =
    "flex flex-col lg:flex-row xl:gap-x-8 xl:justify-between col-span-full relative py-8 px-4 md:px-6 lg:px-0";

  switch (breakPoint) {
    case "default":
      dividerCSS = "section-header-split--default";
      break;
    case "sm":
      dividerCSS = "section-header-split--default";
      break;
    case "md":
      dividerCSS = "section-header-split--default";
      break;
    case "lg":
      dividerCSS = "section-header-split";
      break;
    case "xl":
      dividerCSS = "section-header-split";
      break;
    case "2xl":
      dividerCSS = "section-header-split";
      break;
    case "max":
      dividerCSS = "section-header-split";
      break;
  }

  let classNames = cx(className, { [dividerCSS]: divider });

  return (
    <div className={classNames}>
      <h2 className='lg:w-1/2 lg:pr-4 text--headline'>{leftText}</h2>
      <div className='mt-3 md:mt-4 lg:mt-0 lg:w-1/2 lg:pl-4 flex flex-col'>
        <span className='text--body'>{rightText}</span>
        {button && (
          <LinkButton
            className='mt-3 lg:mt-6'
            href={href}
            alt={alt}
            label={label}
            isCenter={false}
          />
        )}
      </div>
    </div>
  );
};

export default SectionHeaderSplit;

//refactor & optimize this
