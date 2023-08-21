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
  const background = bgColor ? bgColor + ` hover:contrast-200` : 'bg-inherit';
  const border = withBorder ? 'border border-zinc-200 hover:border-zinc-300' : 'border-none';
  const absolute = absoluteParms ? absoluteParms : 'static';
  const width = widthParms ? widthParms : 'w-auto';
  return (
    <button
      type={type}
      className={
        width + ' ' + absolute + ' ' + border + ' text-zinc-100 font-bold py-1.5 px-2 hover:text-zinc-300 ' + background
      }
    >
      {name}
      {children}
    </button>
  );
};
