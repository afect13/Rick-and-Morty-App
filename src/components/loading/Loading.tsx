import classNames from 'classnames';
import { useContext } from 'react';

import { ReactComponent as LoadingSvg } from '../../assets/svg/loading.svg';
import { ThemeContext } from '../../context';

export const Loading = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={classNames('flex justify-center items-center min-w-screen min-h-screen', {
        ['bg-zinc-700']: isDark,
        ['bg-zinc-400']: !isDark,
      })}
    >
      <LoadingSvg className="h-32 w-32 fill-green-800 " />
    </div>
  );
};
