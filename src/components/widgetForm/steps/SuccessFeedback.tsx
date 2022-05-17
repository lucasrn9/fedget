import React from "react";
import successIcon from "../../../assets/success.svg";
import SuccessFeedbackProps from "../../../types/props/SuccessFeedbackProps";

const SuccessFeedback = ({
  setIsFeedbackSent,
  unselectFeedback,
}: SuccessFeedbackProps) => {
  const restartFeedbackFlow = () => {
    setIsFeedbackSent(false);
    unselectFeedback();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="mt-14 mb-2" src={successIcon} alt="success icon" />
      <h2 className="mb-6">Agradecemos o feedback!</h2>
      <button
        onClick={restartFeedbackFlow}
        className="bg-surfaceSecondary hover:bg-surfaceSecondaryHover w-[10.813rem] h-10 py-2 px-6 rounded text-sm leading-6 transition-colors"
        type="button"
      >
        Quero enviar outro
      </button>
    </div>
  );
};

export default SuccessFeedback;
