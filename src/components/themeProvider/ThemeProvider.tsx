import { ReactNode, useState } from 'react';

import { ThemeContext } from '../../context';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheam = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheam,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
