import { createContext } from 'react';

export interface ThemeContext {
  isDark: boolean;
  toggleTheam?: () => void;
}

export interface FeatureContext {
  isTelegramShareEnabled: boolean;
}

export const ThemeContext = createContext<ThemeContext>({ isDark: true });

export const FeatureContext = createContext<FeatureContext>({ isTelegramShareEnabled: false });
