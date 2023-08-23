import classNames from 'classnames';
import { ReactNode, useContext } from 'react';

import { ThemeContext } from '../../context';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <main
      className={classNames('w-full min-h-screen font-poppins', {
        ['bg-zinc-700']: isDark,
        ['bg-zinc-400']: !isDark,
      })}
    >
      <section className="max-w-screen-lg mx-auto">{children}</section>
    </main>
  );
};
