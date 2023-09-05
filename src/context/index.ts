import { createContext } from 'react';

export type ThemeContext = {
  isDark: boolean;
  toggleTheam?: () => void;
};

export type FeatureContext = {
  featureFlagIs: boolean;
};

export const ThemeContext = createContext<ThemeContext>({ isDark: true });

export const FeatureContext = createContext<FeatureContext>({ featureFlagIs: false });
