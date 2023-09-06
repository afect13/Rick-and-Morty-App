import { createContext } from 'react';

export type ThemeContext = {
  isDark: boolean;
  setIsDark: (c: boolean) => void;
};

export type FeatureContext = {
  isTelegramShareEnabled: boolean;
};

export const ThemeContext = createContext<ThemeContext>({ isDark: true, setIsDark: () => undefined });

export const FeatureContext = createContext<FeatureContext>({ isTelegramShareEnabled: false });
