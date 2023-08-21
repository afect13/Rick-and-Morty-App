import { Link } from 'react-router-dom';

import logo from '../../assets/image/logo.png';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import { Button, SearchBar } from '../../components';

export const Menu = () => {
  // TODO: Убрать isAuth  когда будут приходить данные
  const isAuth = true;
  return (
    <div className="flex justify-between items-center h-10">
      <div className="flex gap-4 px-4 items-center ">
        <Link to="/">
          <img className="h-10" src={logo} alt="Logo" />
        </Link>
        <div className="w-[300px]">
          <SearchBar />
        </div>
      </div>
      <div className="border-zinc-100/20 border-l">
        <div className="flex gap-4 px-4 items-center ">
          <Button type={'button'} withBorder={false}>
            <Sun fill="#e4e4e7"></Sun>
          </Button>

          {isAuth ? (
            <>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/favorites">
                <Button type={'button'} name={'Favorites'} withBorder={false} />
              </Link>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/history">
                <Button type={'button'} name={'History'} withBorder={false} />
              </Link>
              <Button type={'button'} name={'Exit'} withBorder={true} />
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button type={'button'} name={'Sign In'} withBorder={false} />
              </Link>
              <Link to="/signup">
                <Button type={'button'} name={'Sign Up'} withBorder={true} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
