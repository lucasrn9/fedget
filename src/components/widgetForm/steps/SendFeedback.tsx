import React, { useState } from "react";
import { ScreenshotButton } from "../..";
import SendFeedbackProps from "../../../types/props/SendFeedbackProps";

const SendFeedback = ({ setIsFeedbackSent }: SendFeedbackProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    feedbackTxt: "",
    screenshotUrl: "",
  });

  const saveScreenshot = (screenshotCode: string) => {
    setScreenshot(screenshotCode);
    setFormData((prevState) => ({
      ...prevState,
      screenshotUrl: screenshotCode,
    }));
  };

  const deleteScreenshot = () => {
    setScreenshot(null);
  };

  const handleFormData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // eslint-disable-next-line consistent-return
  const submitFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.feedbackTxt.length > 350) {
      alert("o seu feedback excedeu a quantidade maxima de 350 caracteres");
      return null;
    }
    if (formData.feedbackTxt.length < 10) {
      alert(
        "Precisamos de mais detalhes, por favor, adicione mais informações ao seu feedback"
      );
      return null;
    }
    console.log(formData);
    setIsFeedbackSent(true);
    return formData;
  };

  return (
    <form className="w-full my-4" onSubmit={(e) => submitFormData(e)}>
      <textarea
        onChange={(e) => handleFormData(e)}
        name="feedbackTxt"
        value={formData.feedbackTxt}
        maxLength={350}
        className="resize-none w-full h-28 border-[1px] border-stroke rounded bg-transparent text-textPrimary py-2 px-3 leading-5 text-sm focus:border-2 focus:border-brand focus:outline-none placeholder:text-textSecondary placeholder:leading-5 scrollbar-thumb-stroke scrollbar-track-transparent scrollbar-thin"
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
      />
      <footer className="flex justify-center my-2">
        <ScreenshotButton
          saveScreenshot={saveScreenshot}
          deleteScreenshot={deleteScreenshot}
          screenshotPreview={screenshot}
        />
        <button
          disabled={!(formData.feedbackTxt.length >= 10)}
          type="submit"
          className="bg-brand text-textOnBrandColor rounded py-2 px-6 ml-2 w-full hover:bg-brandHover transition-colors disabled:opacity-50 disabled:hover:bg-brand"
        >
          Enviar feedback
        </button>
      </footer>
    </form>
  );
};

export default SendFeedback;
