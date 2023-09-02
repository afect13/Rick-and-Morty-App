const url = process.env.REACT_APP_API_URL;

export const checkFeatureFlags = async (setFlag: (flag: boolean) => void): Promise<void> => {
  try {
    if (!url) {
      setFlag(false);
      return;
    }
    const response = await fetch(url);
    const featureFlags = await response.json();
    setFlag(featureFlags.isTelegramShareEnabled);
  } catch (e) {
    setFlag(false);
  }
};
