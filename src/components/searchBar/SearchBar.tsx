import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { Button, Suggestions } from '../../components';
import { useSearchCharacterQuery } from '../../features';
import { useDebounce } from '../../hooks';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [dropDown, setDropDown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const debouncedValue = useDebounce(search, 500);

  const {
    data: characters,
    isLoading,
    isSuccess,
    isError,
  } = useSearchCharacterQuery(debouncedValue, {
    skip: debouncedValue.length < 2,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formattedSearch = search.replace(/\s+/g, '+');
    setIsFocused(false);
    navigate(`/search?q=${formattedSearch}`);
  };
  useEffect(() => {
    const handler = setTimeout(() => setDropDown(debouncedValue.length > 2 && isFocused), 200);
    return () => clearTimeout(handler);
  }, [characters, debouncedValue, isFocused]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="search" className="mb-2 text-sm font-medium text-zinc-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search />
        </div>
        <input
          value={search}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onClick={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="search"
          id="search"
          className="block w-full p-2 pl-10 text-sm text-zinc-900 border border-zinc-300 focus:outline-none focus:ring focus:ring-zinc-400  bg-zinc-50"
          placeholder="Search Сharacter..."
          autoComplete="off"
        />
        <Button
          type="submit"
          withBorder={false}
          name={'Search'}
          absoluteParms={'absolute right-[1px] top-[1px]'}
          bgColor={'bg-zinc-900'}
          invertColor={true}
        />
        {dropDown && (
          <Suggestions isLoading={isLoading} isSuccess={isSuccess} isError={isError} characters={characters} />
        )}
      </div>
    </form>
  );
};
