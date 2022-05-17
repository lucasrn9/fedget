import React, { useState } from "react";
import { Camera, Trash, CircleNotch } from "phosphor-react";
import html2canvas from "html2canvas";
import ScreenshootButtonProps from "../../types/props/ScreenshotButtonProps";

const ScreenshotButton = ({
  saveScreenshot,
  deleteScreenshot,
  screenshotPreview,
}: ScreenshootButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  const takeScreenshot = async () => {
    if (isTakingScreenshot) {
      return null;
    }
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");
    saveScreenshot(base64Image);
    setIsTakingScreenshot(false);
    return null;
  };

  return (
    <div>
      {!screenshotPreview ? (
        <button
          onClick={takeScreenshot}
          type="button"
          className="bg-surfaceSecondary w-10 h-10 p-2 rounded hover:bg-surfaceSecondaryHover transition-colors flex justify-center items-center"
          data-testid="takeScreenshotButton"
        >
          {isTakingScreenshot ? (
            <CircleNotch className="text-textPrimary animate-spin" />
          ) : (
            <Camera className="w-6 h-6 text-textPrimary" />
          )}
        </button>
      ) : (
        <button
          onClick={deleteScreenshot}
          type="button"
          className="bg-surfaceSecondary w-10 h-10 p-1 rounded hover:bg-surfaceSecondaryHover transition-colors flex items-end justify-end"
          style={{
            backgroundImage: `url(${screenshotPreview})`,
            backgroundPosition: "right bottom",
            backgroundSize: 180,
          }}
          data-testid="deleteScreenshotButton"
        >
          <Trash weight="fill" />
        </button>
      )}
    </div>
  );
};

export default ScreenshotButton;
