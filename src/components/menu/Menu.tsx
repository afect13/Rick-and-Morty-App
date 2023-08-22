import classNames from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import logoBlack from '../../assets/image/logo-black.png';
import logoWhite from '../../assets/image/logo-white.png';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import { Button, SearchBar } from '../../components';
import { ThemeContext } from '../../context';

export const Menu = () => {
  // TODO: Убрать isAuth  когда будут приходить данные
  const { isDark, toggleTheam } = useContext(ThemeContext);
  const isAuth = false;
  const theamIcon = isDark ? (
    <Sun className="fill-zinc-200 hover:fill-zinc-300" />
  ) : (
    <Moon className="fill-zinc-200 hover:fill-zinc-300" />
  );

  return (
    <div className="flex justify-between items-center h-10">
      <div className="flex gap-4 px-4 items-center ">
        <Link to="/">
          {isDark ? (
            <img className="h-10" src={logoWhite} alt="Logo" />
          ) : (
            <img className="h-10" src={logoBlack} alt="Logo" />
          )}
        </Link>
        <div className="w-[300px]">
          <SearchBar />
        </div>
      </div>
      <div
        className={classNames('border-l', {
          ['border-zinc-100/20']: isDark,
          ['border-zinc-900/20']: !isDark,
        })}
      >
        <div className="flex gap-4 px-4 items-center ">
          <Button onClick={toggleTheam} type={'button'} withBorder={false} invertColor={true}>
            {theamIcon}
          </Button>
          {isAuth ? (
            <>
              <Link to="/favorites">
                <Button type={'button'} name={'Favorites'} withBorder={false} invertColor={true} />
              </Link>
              <Link to="/history">
                <Button type={'button'} name={'History'} withBorder={false} invertColor={true} />
              </Link>
              <Button type={'button'} name={'Exit'} withBorder={true} invertColor={true} />
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button type={'button'} name={'Sign In'} withBorder={false} invertColor={true} />
              </Link>
              <Link to="/signup">
                <Button type={'button'} name={'Sign Up'} withBorder={true} invertColor={true} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
