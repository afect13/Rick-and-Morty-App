import { ReactNode, useEffect, useState } from 'react';

import { FeatureContext } from '../../context';
import { checkFeatureFlags } from '../../utils';

interface Props {
  children: ReactNode;
}

export const FeatureProvider = ({ children }: Props) => {
  const [isTelegramShareEnabled, setIsTelegramShareEnabled] = useState(false);
  useEffect(() => {
    checkFeatureFlags((flagIs) => setIsTelegramShareEnabled(flagIs));
  }, []);
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
