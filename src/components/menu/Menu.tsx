import { Link } from 'react-router-dom';

import logo from '../../assets/image/logo.png';
import { ReactComponent as Sun } from '../../assets/svg/sun.svg';

export const Menu = () => {
  // TODO: Убрать когда будет приходить через пропсы
  const isAuth = false;
  return (
    <div className="flex justify-between items-center h-10">
      <Link className="px-4" to="/">
        <img className="h-10" src={logo} alt="Logo" />
      </Link>
      <div className="border-zinc-100/20 border-l">
        <div className="flex gap-4 px-4">
          <button className="py-1 px-2">
            <Sun fill="#e4e4e7" stroke="#e4e4e7"></Sun>
          </button>
          {isAuth ? (
            <>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/favorites">
                Favorites
              </Link>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/history">
                History
              </Link>
              <button className="border border-zinc-200 text-zinc-200 font-bold py-1 px-2">Exit</button>
            </>
          ) : (
            <>
              <Link className="text-zinc-200 font-bold py-1 px-2" to="/signin">
                Sign In
              </Link>
              <Link className="border border-zinc-200 text-zinc-200 font-bold py-1 px-2" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
