import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectFeedback from "./SelectFeedback";
import feedbacksList from "../../../feedbacksList/feedbacksList";

describe("SelectFeedback", () => {
  it("should render a SelectFeedbackButton for each feedback in the feedbackList", () => {
    const feedbackSelector = jest.fn();
    render(<SelectFeedback feedbackSelector={feedbackSelector} />);
    const selectFeedbackButtons = screen.getAllByRole("button");
    expect(selectFeedbackButtons).toHaveLength(feedbacksList.feedbacks.length);
  });
  it("when the button is clicked, it should calls the feedbackSelector function with the feedback display text", async () => {
    const feedbackSelector = jest.fn();
    const user = userEvent.setup();
    render(<SelectFeedback feedbackSelector={feedbackSelector} />);
    const selectFeedbackButtons = screen.getAllByRole("button");
    await user.click(selectFeedbackButtons[0]);
    expect(feedbackSelector).toHaveBeenCalledWith(
      feedbacksList.feedbacks[0].displayText
    );
  });
});
