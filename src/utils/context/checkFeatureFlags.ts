const url = process.env.REACT_APP_API_URL;

export const checkFeatureFlags = async () => {
  try {
    if (!url) {
      throw new Error('URL is not defined');
    }
    const response = await fetch(url);
    const featureFlags = await response.json();
    return featureFlags;
  } catch (e) {
    return false;
  }
};
