import React from "react";
import { SelectFeedbackButton } from "../..";
import feedbacksList from "../../../feedbacksList/feedbacksList";
import SelectFeedbackProps from "../../../types/props/SelectFeedbackProps";
import SelectedFeedback from "../../../types/SelectedFeedback";

const SelectFeedback = ({ feedbackSelector }: SelectFeedbackProps) => (
  <div className="flex justify-center mt-8">
    {feedbacksList.feedbacks.map((feedback) => (
      <div key={feedback.displayText} className="mr-4 last:mr-0">
        <SelectFeedbackButton
          key={feedback.displayText}
          image={feedback.image.url}
          imageAlt={feedback.image.alt}
          text={feedback.displayText}
          onClick={() =>
            feedbackSelector(feedback.displayText as SelectedFeedback)
          }
        />
      </div>
    ))}
  </div>
);

export default SelectFeedback;
