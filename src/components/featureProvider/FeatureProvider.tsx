import { ReactNode, useEffect, useState } from 'react';

import { FeatureContext } from '../../context';
import { checkFeatureFlags } from '../../utils';

type Props = {
  children: ReactNode;
};

export const FeatureProvider = ({ children }: Props) => {
  const [featureFlagIs, setFeatureFlagIs] = useState(false);
  useEffect(() => {
    checkFeatureFlags().then((flagIs) => setFeatureFlagIs(flagIs));
  }, []);
  const contextValue = {
    featureFlagIs,
  };
  return <FeatureContext.Provider value={contextValue}>{children}</FeatureContext.Provider>;
};
