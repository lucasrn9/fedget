import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SuccessFeedback from "./SuccessFeedback";

describe("SuccessFeedback", () => {
  it("when the button is clicked, it should call the function setIsFeedbackSent passing the value false, and the function unselectFeedback", async () => {
    const setIsFeedbackSent = jest.fn();
    const unselectFeedback = jest.fn();
    const user = userEvent.setup();
    render(
      <SuccessFeedback
        setIsFeedbackSent={setIsFeedbackSent}
        unselectFeedback={unselectFeedback}
      />
    );
    const button = screen.getByRole("button");
    await user.click(button);
    expect(setIsFeedbackSent).toHaveBeenCalledTimes(1);
    expect(setIsFeedbackSent).toHaveBeenCalledWith(false);
    expect(unselectFeedback).toHaveBeenCalledTimes(1);
  });
});
