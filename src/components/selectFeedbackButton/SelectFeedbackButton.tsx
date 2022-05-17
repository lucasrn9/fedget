import React from "react";
import FeedBackTypeButtonProps from "../../types/props/FeedBackTypeButtonProps";

const SelectFeedbackButton = ({
  image,
  imageAlt,
  text,
  onClick,
}: FeedBackTypeButtonProps) => {
  return (
    <button
      type="button"
      className="bg-surfaceSecondary flex flex-col justify-center items-center p-2 w-24 h-28 rounded-lg cursor-pointer border-2 border-transparent hover:border-brand focus:border-brand focus:outline-none"
      onClick={onClick}
    >
      <img className="w-10 h-10 my-2" src={image} alt={imageAlt} />
      <span className="my-2">{text}</span>
    </button>
  );
};

export default SelectFeedbackButton;
