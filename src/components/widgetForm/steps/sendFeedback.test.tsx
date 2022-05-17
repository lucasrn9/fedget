import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SendFeedback from "./SendFeedback";

describe("SendFeedback", () => {
  it("should keep the submit feedback button disabled until the text area has 10 or more characteres", async () => {
    const user = userEvent.setup();
    const setIsfeedbackSent = jest.fn();
    render(<SendFeedback setIsFeedbackSent={setIsfeedbackSent} />);
    const textArea = screen.getByRole("textbox");
    const sendFeedbackButton = screen.getByRole("button", {
      name: "Enviar feedback",
    });
    expect(textArea).toBeEmptyDOMElement();
    expect(sendFeedbackButton).toBeDisabled();
    await user.type(textArea, "abcdefghij");
    expect(textArea).toHaveTextContent("abcdefghij");
    expect(sendFeedbackButton).toBeEnabled();
  });

  it("should keep the ScreenshotButton enabled no mather the text area content", async () => {
    const setIsfeedbackSent = jest.fn();
    const user = userEvent.setup();
    render(<SendFeedback setIsFeedbackSent={setIsfeedbackSent} />);
    const textArea = screen.getByRole("textbox");
    const screenshotButton = screen.getByTestId("takeScreenshotButton");
    expect(textArea).toBeEmptyDOMElement();
    expect(screenshotButton).toBeEnabled();
    await user.type(textArea, "abcdefghij");
    expect(textArea).toHaveTextContent("abcdefghij");
    expect(screenshotButton).toBeEnabled();
  });
});
