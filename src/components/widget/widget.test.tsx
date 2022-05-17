import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Widget from "./Widget";

describe("Widget", () => {
  it("should show the text 'feedback' when the button is hovered", async () => {
    const user = userEvent.setup();
    render(<Widget />);
    const button = screen.getByRole("button");
    let text = screen.queryByText("feedback");
    expect(text).not.toBeInTheDocument();
    await user.hover(button);
    text = screen.getByText("Feedback");
    expect(text).toBeVisible();
  });
});
