import React from "react";
import { X } from "phosphor-react";
import { Popover } from "@headlessui/react";

const CloseWidgetButton = () => (
  <Popover.Button
    className="absolute top-4 right-4"
    title="Close feedback form"
  >
    <X
      weight="bold"
      className="text-textSecondary hover:text-textPrimary w-6 h-6 cursor-pointer transition-colors"
    />
  </Popover.Button>
);

export default CloseWidgetButton;
