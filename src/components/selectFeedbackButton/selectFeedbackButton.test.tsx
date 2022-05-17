import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectFeedbackButton from "./SelectFeedbackButton";

describe("SelectFeedbackButton", () => {
  it("should render the component with the image, the image alt and the text passed in the props", () => {
    const onClick = jest.fn();
    render(
      <SelectFeedbackButton
        image="test/test"
        imageAlt="test alt"
        text="test text"
        onClick={onClick}
      />
    );
    const image = screen.getByRole("img");
    const text = screen.getByText("test text");
    expect(image).toHaveAttribute("alt", "test alt");
    expect(image).toHaveAttribute("src", "test/test");
    expect(text).toBeVisible();
  });
  it("should call the onClick function when the button is clicked", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(
      <SelectFeedbackButton
        image="test/test"
        imageAlt="test alt"
        text="test text"
        onClick={onClick}
      />
    );
    const button = screen.getByRole("button");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
