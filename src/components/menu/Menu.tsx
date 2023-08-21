import { Link } from 'react-router-dom';

import logo from '../../assets/image/logo.png';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import { Button } from '../button/Button';
import { SearchBar } from '../searchBar/SearchBar';

export const Menu = () => {
  // TODO: Убрать когда будет приходить через пропсы
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
          <Button withBorder={false}>
            <Sun fill="#e4e4e7" stroke="#e4e4e7"></Sun>
          </Button>

          {isAuth ? (
            <>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/favorites">
                <Button name={'Favorites'} withBorder={false} />
              </Link>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/history">
                <Button name={'History'} withBorder={false} />
              </Link>
              <Button name={'Exit'} withBorder={true} />
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button name={'Sign In'} withBorder={false} />
              </Link>
              <Link to="/signup">
                <Button name={'Sign Up'} withBorder={true} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
