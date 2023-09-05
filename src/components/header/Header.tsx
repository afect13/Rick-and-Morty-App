import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactNode, useContext } from 'react';

import { ThemeContext } from '../../context';

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <header
      className={classNames('w-full fixed h-18 z-20 font-poppins', {
        ['bg-zinc-800']: isDark,
        ['bg-zinc-200']: !isDark,
      })}
    >
      <nav className="max-w-screen-lg py-4 mx-auto ">{children}</nav>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
