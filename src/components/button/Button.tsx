import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  name?: string;
  bgColor?: string;
  withBorder: boolean;
  children?: ReactNode;
  absoluteParms?: string;
  widthParms?: string;
  type: 'button' | 'submit';
}

export const Button = ({ name, bgColor, withBorder, children, absoluteParms, type, widthParms }: Props) => {
  const buttonClassNames = classNames('text-zinc-100 font-bold py-1.5 px-2 hover:text-zinc-300', {
    [`${bgColor} hover:contrast-200`]: bgColor,
    ['border border-zinc-200 hover:border-zinc-300']: withBorder,
    [`${absoluteParms}`]: absoluteParms,
    [`${widthParms}`]: widthParms,
  });

  return (
    <button type={type} className={buttonClassNames}>
      {name}
      {children}
    </button>
  );
};
