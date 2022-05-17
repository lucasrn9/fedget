import { ArrowLeft } from "phosphor-react";
import React from "react";
import BackWidgetButtonProps from "../../types/props/BackWidgetButtonProps";

const BackWidgetButton = ({ onClick }: BackWidgetButtonProps) => (
  <button className="absolute top-4 left-4" type="button" onClick={onClick}>
    <ArrowLeft
      weight="bold"
      className="text-textSecondary w-6 h-6 hover:text-textPrimary transition-colors"
      data-testid="backWidgetButton"
    />
  </button>
);

export default BackWidgetButton;
