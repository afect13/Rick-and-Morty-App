import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { Button } from '../button/Button';

export const SearchBar = () => {
  return (
    <form className="w-full">
      <label htmlFor="search" className="mb-2 text-sm font-medium text-zinc-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-2 pl-10 text-sm text-zinc-900 border border-zinc-300 focus:outline-none focus:ring focus:ring-zinc-400  bg-zinc-50   "
          placeholder="Search Сharacter..."
          required
        />
        <Button
          withBorder={true}
          name={'Search'}
          absoluteParms={'absolute right-0 bottom-0 '}
          bgColor={'bg-zinc-900'}
        />
      </div>
    </form>
  );
};
