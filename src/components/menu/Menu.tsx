import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logoBlack from '../../assets/image/logo-black.png';
import logoWhite from '../../assets/image/logo-white.png';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import { Button, SearchBar } from '../../components';
import { ThemeContext } from '../../context';
import { clearError, getIsAuthenticated, signout } from '../../features';
import { useAppDispatch } from '../../store';

export const Menu = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getIsAuthenticated);
  const { isDark, setIsDark } = useContext(ThemeContext);
  const iconClass = 'fill-zinc-200 hover:fill-zinc-300';
  const theamIcon = isDark ? <Sun className={iconClass} /> : <Moon className={iconClass} />;
  const handleSingout = () => {
    dispatch(signout());
  };

  return (
    <div className="flex justify-between items-center h-10">
      <div className="flex gap-4 px-4 items-center ">
        <Link to="/">
          <img className="h-10" src={isDark ? logoWhite : logoBlack} alt="Logo" />
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
          <Button onClick={() => setIsDark(!isDark)} type={'button'} withBorder={false} invertColor={true}>
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
              <Button onClick={handleSingout} type={'button'} name={'Exit'} withBorder={true} invertColor={true} />
            </>
          ) : (
            <>
              <Link onClick={() => dispatch(clearError())} to="/signin">
                <Button type={'button'} name={'Sign In'} withBorder={false} invertColor={true} />
              </Link>
              <Link onClick={() => dispatch(clearError())} to="/signup">
                <Button type={'button'} name={'Sign Up'} withBorder={true} invertColor={true} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
