import { render, screen } from "@testing-library/react";
import Accordion, { ACCORDION_TEST_ID } from "../Accordion";
import AccordionItem from "../AccordionItem";

describe("Accordion ", () => {
  it("should render custom classnames", async () => {
    const className = "class-test";
    render(
      <Accordion className={className}>
        <AccordionItem title='Section 1 title' caption='caption-1'>
          content
        </AccordionItem>
        <AccordionItem title='Section 2 title' caption='caption-2'>
          content 2
        </AccordionItem>
        <AccordionItem title='Section 3 title' caption='caption-3'>
          content 3
        </AccordionItem>
      </Accordion>
    );

    const accordion = await screen.findByTestId(ACCORDION_TEST_ID);
    expect(accordion).toHaveClass(className);
    expect(accordion).toMatchSnapshot();
  });
});
