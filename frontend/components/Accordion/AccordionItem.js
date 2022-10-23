import React, { useState, useRef } from "react";
import AccordionButton from "./AccordionButton";
import useBreakpointSize from "../../hooks/useBreakpointSize";
import cx from "classnames";

export const ACCORDION_ITEM_TEST_ID = "accordion-item";
export const ACCORDION_TRIGGER_TEST_ID = "accordion-trigger";
export const ACCORDION_HEADER_TEST_ID = "accordion-header";
export const ACCORDION_CAPTION_TEST_ID = "accordion-caption";
export const ACCORDION_CONTENT_TEXT_TEST_ID = "accordion-content-text";

const AccordionItem = ({ title, caption, children, startOpened = false, index }) => {
  //atypical accordion item.
  //at these breakpoints, the layout changes & accordion is not collapsible
  const disabledBreakpoints = ["lg", "xl", "2xl", "max"];
  const [isOpen, setIsOpen] = useState(startOpened);
  let isDisabled = useRef(null);

  let accordionItemContentClass = cx({
    ["accordion-item_content"]: true,
    ["accordion-item_content--open"]: isOpen,
    ["accordion-item_content--closed"]: !isOpen,
  });

  let accordionCaptionClass = cx({
    ["accordion-item_caption"]: true,
    ["accordion-item_caption--open"]: isOpen,
    ["accordion-item_caption--closed"]: !isOpen,
  });

  let breakpoint = useBreakpointSize();

  if (disabledBreakpoints.includes(breakpoint)) {
    isDisabled = true;
  } else {
    isDisabled = false;
  }

  if (disabledBreakpoints.includes(breakpoint) && !isOpen) {
    setIsOpen(true);
  }

  const onClick = (e) => {
    if (disabledBreakpoints.includes(breakpoint)) {
      return false;
    }
    setIsOpen(!isOpen);
  };
  
  const accordionID = "accordion-" + index + "-id";
  const ariaControls = title.toLowerCase().replaceAll(" ", "-").concat("-content");

  return (
    <li
      role='heading'
      aria-level={3}
      className='accordion-item'
      data-state={isOpen}
      data-testid={ACCORDION_ITEM_TEST_ID}
    >
      <button
        className='accordion-item_trigger'
        id={accordionID}
        onClick={onClick}
        aria-controls={ariaControls}
        aria-expanded={isOpen}
        aria-disabled={isDisabled}
        data-state={isOpen}
        data-testid={ACCORDION_TRIGGER_TEST_ID}
      >
        <div className='flex flex-col'>
          <span className='accordion-item_header' data-testid={ACCORDION_HEADER_TEST_ID}>
            {title}
          </span>
          {caption && (
            <span className={accordionCaptionClass} data-testid={ACCORDION_CAPTION_TEST_ID}>
              {caption}
            </span>
          )}
        </div>
        <AccordionButton isActive={isOpen} disabledBreakpoints={disabledBreakpoints} />
      </button>

      <div
        id={ariaControls}
        aria-labelledby={accordionID}
        className={accordionItemContentClass}
        data-testid={ACCORDION_CONTENT_TEXT_TEST_ID}
      >
        {children}
      </div>
    </li>
  );
};

export default AccordionItem;
