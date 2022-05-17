interface ScreenshotButtonProps {
  saveScreenshot: (screenshotCode: string) => void;
  deleteScreenshot: () => void;
  screenshotPreview: string | null;
}

export default ScreenshotButtonProps;
