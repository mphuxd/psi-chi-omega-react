import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion, { ACCORDION_TEST_ID } from "../Accordion";
import AccordionItem, {
  ACCORDION_CONTENT_TEXT_TEST_ID,
  ACCORDION_HEADER_TEST_ID,
  ACCORDION_ITEM_TEST_ID,
  ACCORDION_CAPTION_TEST_ID,
  ACCORDION_TRIGGER_TEST_ID,
} from "../AccordionItem";

describe("AccordionItem: ", () => {
  it("should render default classnames", async () => {
    render(
      <Accordion>
        <AccordionItem title='item-title' caption='item-caption'>
          content
        </AccordionItem>
      </Accordion>
    );

    const item = await screen.findByTestId(ACCORDION_ITEM_TEST_ID);
    expect(item).toHaveClass("accordion-item");
    expect(item).toMatchSnapshot();

    const header = await screen.findByTestId(ACCORDION_HEADER_TEST_ID);
    expect(header).toHaveClass("accordion-item_header");
    expect(header).toMatchSnapshot();

    const contentText = await screen.findByTestId(ACCORDION_CONTENT_TEXT_TEST_ID);
    expect(contentText).toHaveClass("accordion-item_content");
    expect(contentText).toMatchSnapshot();

    const caption = await screen.findByTestId(ACCORDION_CAPTION_TEST_ID);
    expect(caption).toHaveClass("accordion-item_caption");
    expect(caption).toMatchSnapshot();

    const trigger = await screen.findByTestId(ACCORDION_TRIGGER_TEST_ID);
    expect(trigger).toHaveClass("accordion-item_trigger");
    expect(trigger).toMatchSnapshot();
  });

  it("should render open classnames according to state", async () => {
    render(
      <Accordion>
        <AccordionItem title='item-title' caption='item-value' startOpened={true}>
          content
        </AccordionItem>
      </Accordion>
    );
    const contentText = await screen.findByTestId(ACCORDION_CONTENT_TEXT_TEST_ID);
    expect(contentText).toHaveClass("accordion-item_content", "accordion-item_content--open");

    const caption = await screen.findByTestId(ACCORDION_CAPTION_TEST_ID);
    expect(caption).toHaveClass("accordion-item_caption", "accordion-item_caption--open");
  });

  it("should pass string as title", async () => {
    const title = "item-title";
    render(
      <Accordion>
        <AccordionItem title={title} caption='item-value'>
          content
        </AccordionItem>
      </Accordion>
    );

    const header = await screen.findByTestId(ACCORDION_HEADER_TEST_ID);
    expect(header).toHaveTextContent(title);
  });

  it("should pass string as caption", async () => {
    const capt = "item-caption";
    render(
      <Accordion>
        <AccordionItem title='item-title' caption={capt}>
          content
        </AccordionItem>
      </Accordion>
    );

    const caption = await screen.findByTestId(ACCORDION_CAPTION_TEST_ID);
    expect(caption).toHaveTextContent(capt);
  });

  it("should be expanded & not collapsible at breakpoints >= lg", async () => {
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

    const buttons = await screen.findAllByRole("button");
    expect(buttons[0]).toHaveAttribute("data-state", "true");
    expect(buttons[1]).toHaveAttribute("data-state", "true");
    expect(buttons[2]).toHaveAttribute("data-state", "true");
    userEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("data-state", "true");
    expect(buttons[1]).toHaveAttribute("data-state", "true");
    expect(buttons[2]).toHaveAttribute("data-state", "true");
    userEvent.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("data-state", "true");
    expect(buttons[1]).toHaveAttribute("data-state", "true");
    expect(buttons[2]).toHaveAttribute("data-state", "true");
    userEvent.click(buttons[2]);
    expect(buttons[0]).toHaveAttribute("data-state", "true");
    expect(buttons[1]).toHaveAttribute("data-state", "true");
    expect(buttons[2]).toHaveAttribute("data-state", "true");
    const accordion = await screen.findByTestId(ACCORDION_TEST_ID);
    expect(accordion).toMatchSnapshot()
  });
});
