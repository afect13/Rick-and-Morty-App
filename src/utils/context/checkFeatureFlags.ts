const url = process.env.REACT_APP_API_URL;

export const checkFeatureFlags = async (): Promise<boolean> => {
  try {
    if (!url) {
      return false;
    }
    const response = await fetch(url);
    const featureFlags = await response.json();
    return featureFlags.isTelegramShareEnabled;
  } catch (e) {
    return false;
  }
};
