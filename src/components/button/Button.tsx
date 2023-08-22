import classNames from 'classnames';
import { ReactNode, useContext } from 'react';

import { ThemeContext } from '../../context';

interface Props {
  name?: string;
  bgColor?: string | undefined;
  withBorder: boolean;
  children?: ReactNode;
  absoluteParms?: string;
  widthParms?: string;
  type: 'button' | 'submit';
  invertColor?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  name,
  bgColor,
  withBorder,
  children,
  absoluteParms,
  type,
  widthParms,
  invertColor,
  onClick,
}: Props) => {
  const { isDark } = useContext(ThemeContext);
  const buttonClassNames = classNames(
    'text-zinc-100 font-bold py-1.5 px-2 hover:text-zinc-300 hover:brightness-105',
    bgColor,
    absoluteParms,
    widthParms,
    {
      ['border border-zinc-200 hover:border-zinc-300']: withBorder,
      invert: !isDark && invertColor,
    }
  );

  return (
    <button onClick={onClick} type={type} className={buttonClassNames}>
      {name}
      {children}
    </button>
  );
};
