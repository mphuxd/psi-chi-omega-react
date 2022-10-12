import cx from "classnames";

export const ACCORDION_TEST_ID = "accordion";

function Accordion({ children, className }) {
  let classNames = cx(className);
  return (
    <ol data-testid={ACCORDION_TEST_ID} className={classNames}>
      {children}
    </ol>
  );
}

export default Accordion;
