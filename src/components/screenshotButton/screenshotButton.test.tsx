import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScreenshotButton from "./ScreenshotButton";

jest.mock("html2canvas", () => {
  const originalModule = jest.requireActual("html2canvas");
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => {
      const canvas = document.createElement("canvas");
      canvas.outerHTML =
        '<canvas width="788" height="952" style="width: 788px; height: 952px;"></canvas>';
      return Promise.resolve(canvas);
    }),
  };
});

describe("ScreenshotButton", () => {
  it("should render the take screenshot button if there isn't a screenshot preview", async () => {
    const user = userEvent.setup();
    const saveScreenshot = jest.fn();
    const deleteScreenshot = jest.fn();
    const screenshotPreview = null;
    render(
      <ScreenshotButton
        saveScreenshot={saveScreenshot}
        deleteScreenshot={deleteScreenshot}
        screenshotPreview={screenshotPreview}
      />
    );
    const takeScreenshotButton = screen.getByRole("button");
    await user.click(takeScreenshotButton);
    expect(saveScreenshot).toHaveBeenCalledTimes(1);
    expect(deleteScreenshot).toHaveBeenCalledTimes(0);
  });
  it("should render the delete screenshot button if there is a screenshot preview", async () => {
    const user = userEvent.setup();
    const saveScreenshot = jest.fn();
    const deleteScreenshot = jest.fn();
    const screenshotPreview = "test";
    render(
      <ScreenshotButton
        saveScreenshot={saveScreenshot}
        deleteScreenshot={deleteScreenshot}
        screenshotPreview={screenshotPreview}
      />
    );
    const deleteScreenshotButton = screen.getByRole("button");
    await user.click(deleteScreenshotButton);
    expect(deleteScreenshot).toHaveBeenCalledTimes(1);
    expect(saveScreenshot).toHaveBeenCalledTimes(0);
  });
});
