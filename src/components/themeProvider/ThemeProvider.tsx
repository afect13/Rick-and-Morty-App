import { ReactNode, useMemo, useState } from 'react';

import { ThemeContext } from '../../context';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(true);
  const contexValue = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  return <ThemeContext.Provider value={contexValue}>{children}</ThemeContext.Provider>;
};
