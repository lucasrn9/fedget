/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import SelectedFeedback from "../../types/SelectedFeedback";

import { CloseWidgetButton, BackWidgetButton } from "..";
import { SelectFeedback, SendFeedback, SuccessFeedback } from "./steps";

const WidgetForm = () => {
  const [selectedFeedback, setSelectedFeedback] =
    useState<SelectedFeedback>(null);

  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  const feedbackSelector = (feedbackType: SelectedFeedback) => {
    setSelectedFeedback(feedbackType);
  };

  const unselectFeedback = () => {
    setSelectedFeedback(null);
  };

  return (
    <div className="bg-surfacePrimary shadow-lg w-full md:w-[364px] h-[264px] px-4 rounded-b-none rounded-2xl md:rounded-b-2xl relative font-medium flex flex-col items-center">
      <header className="text-center">
        {selectedFeedback && !isFeedbackSent ? (
          <BackWidgetButton onClick={unselectFeedback} />
        ) : (
          ""
        )}
        {!isFeedbackSent && (
          <h1 className="text-textPrimary text-xl leading-6 pt-3">
            {!selectedFeedback ? "Deixe seu feedback" : selectedFeedback}
          </h1>
        )}
        <CloseWidgetButton />
      </header>
      <main className="w-full">
        {isFeedbackSent ? (
          <SuccessFeedback
            setIsFeedbackSent={setIsFeedbackSent}
            unselectFeedback={unselectFeedback}
          />
        ) : !selectedFeedback ? (
          <SelectFeedback feedbackSelector={feedbackSelector} />
        ) : (
          <SendFeedback setIsFeedbackSent={setIsFeedbackSent} />
        )}
      </main>
      <footer className="text-textSecondary text-xs leading-4 absolute bottom-4">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2 hover:text-textPrimary transition-colors aaa"
          href="https://www.rocketseat.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};

export default WidgetForm;
