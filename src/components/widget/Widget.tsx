import React from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "../widgetForm";

const Widget = () => (
  <Popover className="flex flex-col items-end md:absolute md:bottom-6 md:right-6">
    <Popover.Panel className="absolute md:static bottom-0 w-screen md:w-auto z-50 md:mb-4">
      <WidgetForm />
    </Popover.Panel>
    <Popover.Button
      type="button"
      className="bg-brand h-12 px-3 rounded-full text-white flex items-center group absolute md:static bottom-4 right-4 focus:outline-transparent"
    >
      <ChatTeardropDots className="w-6 h-6" />
      <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-linear overflow-hidden">
        <span className="ml-2" />
        Feedback
      </span>
    </Popover.Button>
  </Popover>
);

export default Widget;
