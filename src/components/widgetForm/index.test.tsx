import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover } from "@headlessui/react";
import WidgetForm from ".";
import feedbacksList from "../../feedbacksList/feedbacksList";

const setup = () => {
  render(
    <Popover>
      <WidgetForm />
    </Popover>
  );
};

describe("WidgetForm main", () => {
  it("should show the SelectFeedback step while the feedback has not been selected", () => {
    setup();
    feedbacksList.feedbacks.forEach((feedback) => {
      const selectFeedbackButton = screen.getByText(feedback.displayText);
      expect(selectFeedbackButton).toBeVisible();
    });
  });
  it("should show the sendFeedback step while there is a feedback selected", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    const selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    const textArea = screen.getByRole("textbox");
    const submitFeedbackButton = screen.getByRole("button", {
      name: "Enviar feedback",
    });
    expect(textArea).toBeVisible();
    expect(submitFeedbackButton).toBeVisible();
  });
  it("should show the SuccessFeedback step when the feedback has been sent successfully", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    const selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    const textArea = screen.getByRole("textbox");
    const submitFeedbackButton = screen.getByRole("button", {
      name: "Enviar feedback",
    });
    await user.type(textArea, "abcdefghij");
    await user.click(submitFeedbackButton);
    const message = screen.getByRole("heading", {
      name: "Agradecemos o feedback!",
    });
    const sendAnotherFeedbackButton = screen.getByRole("button", {
      name: "Quero enviar outro",
    });
    expect(message).toBeVisible();
    expect(sendAnotherFeedbackButton).toBeVisible();
  });
  it("should go back to the SelectFeedback step when the send another feedback button is clicked in the SuccessFeedback step", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    let selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    const textArea = screen.getByRole("textbox");
    const submitFeedbackButton = screen.getByRole("button", {
      name: "Enviar feedback",
    });
    await user.type(textArea, "abcdefghij");
    await user.click(submitFeedbackButton);
    const sendAnotherFeedbackButton = screen.getByRole("button", {
      name: "Quero enviar outro",
    });
    await user.click(sendAnotherFeedbackButton);
    selectFeedbackButton = screen.getByText(feedback1Text);
    expect(selectFeedbackButton).toBeVisible();
  });
});

describe("WidgetForm header", () => {
  it("should show the BackWidgetButton only if there is a selected feedback and this feedback has not been sent yet", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    let backWidgetButton = screen.queryByTestId("backWidgetButton");
    expect(backWidgetButton).not.toBeInTheDocument();
    const selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    backWidgetButton = screen.getByTestId("backWidgetButton");
    expect(backWidgetButton).toBeVisible();
    const textArea = screen.getByRole("textbox");
    const submitFeedbackButton = screen.getByRole("button", {
      name: "Enviar feedback",
    });
    await user.type(textArea, "abcdefghij");
    await user.click(submitFeedbackButton);
    expect(backWidgetButton).not.toBeInTheDocument();
  });
  it("should go back to the SelectFeedback step when the BackWidgetButton is clicked", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    let selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    expect(selectFeedbackButton).not.toBeVisible();
    const backWidgetButton = screen.getByTestId("backWidgetButton");
    await user.click(backWidgetButton);
    selectFeedbackButton = screen.getByText(feedback1Text);
    expect(selectFeedbackButton).toBeVisible();
  });
  it("should show the header heading with the text 'Deixe seu feedback' when there is not a selected feedback", () => {
    setup();
    const heading = screen.getByRole("heading", { name: "Deixe seu feedback" });
    expect(heading).toBeVisible();
  });
  it("should show the header heading with the same text as the selected feedback text", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    const selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    const heading = screen.getByRole("heading", { name: feedback1Text });
    expect(heading).toBeVisible();
  });
  it("the header heading should not be visible when the feedback has been sent", async () => {
    setup();
    const user = userEvent.setup();
    const feedback1Text = feedbacksList.feedbacks[0].displayText;
    const selectFeedbackButton = screen.getByText(feedback1Text);
    await user.click(selectFeedbackButton);
    const heading = screen.getByRole("heading", { name: feedback1Text });
    expect(heading).toBeVisible();
    const textArea = screen.getByRole("textbox");
    const submitFeedbackButton = screen.getByRole("button", {
      name: "Enviar feedback",
    });
    await user.type(textArea, "abcdefghij");
    await user.click(submitFeedbackButton);
    expect(heading).not.toBeVisible();
  });
});
