import { createContext } from 'react';

export type ThemeContextType = {
  isDark: boolean;
  toggleTheam?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({ isDark: true });
