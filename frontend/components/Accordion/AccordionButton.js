import React from "react";
import Image from "next/image";
import cx from "classnames";

export const ACCORDION_BUTTON_TEST_ID = "accordion-button";

function AccordionButton({ isActive, disabledBreakpoints }) {
  let classNames = cx({
    ["accordion-button"]: true,
    [disabledBreakpoints[0] + ":" + "hidden"]: true,
    ["rotate-180"]: isActive,
  });
  return (
    <div
      aria-hidden={true}
      className={classNames}
      data-state={isActive}
      data-testid={ACCORDION_BUTTON_TEST_ID}
    >
      <Image src='/images/icons/expand_more.svg' alt='Expand More' width={32} height={32} />
    </div>
  );
}

export default AccordionButton;
