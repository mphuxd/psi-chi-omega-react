import React, { useState } from "react";
import cx from "classnames";
import useBreakpointSize from "../../hooks/useBreakpointSize";
import Image from "next/image";
import AccordionButton from "./AccordionButton";

const AccordionItem = ({ title, caption, children, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);
  let className = cx({
    ["text--body col-span-full lg:col-span-8 lg:block"]: true,
    ["accordion-item--active block pb-4"]: isOpen,
    ["accordion-item--closed hidden"]: !isOpen,
    ["accordion-item--disabled"]: false,
  });

  let captionClass = cx({
    ["text-left lg:inline"]: true,
    ["inline"]: isOpen,
    ["hidden"]: !isOpen,
  });

  let breakPoint = useBreakpointSize();
  let disabledBreakPoints = ["lg", "xl", "2xl", "max"];
  const onClick = () => {
    if (disabledBreakPoints.includes(breakPoint)) {
      return false;
    }
    setIsOpen(!isOpen);
  };

  return (
    <li className='theme-grid__inner relative py-4 md:py-6'>
      <button
        onClick={onClick}
        className='accordion-item col-span-full lg:col-span-4 flex justify-between flex-row lg:hover:cursor-default'
      >
        <div className='flex flex-col'>
          <h3 className='inline-block font-body text-2xl leading-8 font-bold sm:text-4xl md:text-3xl md:leading-tight xl:leading-tight'>
            {title}
          </h3>
          <p className={captionClass}>{caption}</p>
        </div>
        <AccordionButton isActive={isOpen}></AccordionButton>
      </button>

      <div className={className}>{children}</div>
    </li>
  );
};

export default AccordionItem;
