import classNames from 'classnames';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

export const ErrorFallback = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={classNames('flex justify-center items-center min-w-full pt-32', {
        ['bg-zinc-700']: isDark,
        ['bg-zinc-400']: !isDark,
      })}
    >
      <h2 className=" text-red-800 font-bold text-4xl">Something went wrong</h2>
    </div>
  );
};
