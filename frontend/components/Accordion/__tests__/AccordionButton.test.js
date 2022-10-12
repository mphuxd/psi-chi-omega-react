import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
import { ACCORDION_BUTTON_TEST_ID } from "../AccordionButton";

describe("AccordionButton ", () => {
  it("should rotate on click", async () => {
    render(
      <Accordion>
        <AccordionItem title='Section 1 title' caption='caption-1'>
          content
        </AccordionItem>
      </Accordion>
    );

    const button = await screen.findByTestId(ACCORDION_BUTTON_TEST_ID);
    expect(button).toHaveClass("accordion-button");
    expect(button).toMatchSnapshot();

    userEvent.click(button);
    expect(button).toHaveClass("accordion-button");
    expect(button).toHaveClass("rotate-180");
    expect(button).toMatchSnapshot();

    userEvent.click(button);
    expect(button).toHaveClass("accordion-button");
    expect(button).toMatchSnapshot();
  });
});
