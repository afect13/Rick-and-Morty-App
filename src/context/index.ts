import { createContext } from 'react';

export interface ThemeContext {
  isDark: boolean;
  toggleTheam?: () => void;
}

export interface FeatureContext {
  featureFlagIs: boolean;
}

export const ThemeContext = createContext<ThemeContext>({ isDark: true });

export const FeatureContext = createContext<FeatureContext>({ featureFlagIs: false });
