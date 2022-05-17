import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackWidgetButton from "./BackWidgetButton";

describe("BackWidgetButton", () => {
  it("should call the click fuction when the button is clicked", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<BackWidgetButton onClick={onClick} />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
