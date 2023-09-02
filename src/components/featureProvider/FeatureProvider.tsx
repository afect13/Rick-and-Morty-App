import { ReactNode, useState } from 'react';

import { FeatureContext } from '../../context';

interface Props {
  children: ReactNode;
}

export const FeatureProvider = ({ children }: Props) => {
  const [isTelegramShareEnabled, setIsTelegramShareEnabled] = useState(false);

  return (
    <FeatureContext.Provider
      value={{
        isTelegramShareEnabled,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};
