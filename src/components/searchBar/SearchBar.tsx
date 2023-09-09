import { ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as SearchSvg } from '../../assets/svg/search.svg';
import { Button, Suggestions } from '../../components';
import { getSearch, setSearch, setSuggestions, useSearchCharacterQuery } from '../../features';
import { useDebounce } from '../../hooks';
import { useAppDispatch } from '../../store';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useSelector(getSearch);
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
    dispatch(setSearch(event.target.value));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formattedSearch = search.replace(/\s+/g, '+');
    dispatch(setSuggestions(false));
    if (formattedSearch) {
      navigate(`/search?q=${formattedSearch}`);
    }
  };
  const handleToggleSuggestions = (isShow: boolean) => {
    if (isShow) {
      dispatch(setSuggestions(true));
    } else {
      setTimeout(() => {
        dispatch(setSuggestions(false));
      }, 300);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="search" className="mb-2 text-sm font-medium text-zinc-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchSvg />
        </div>
        <input
          value={search}
          onChange={handleChange}
          onFocus={() => handleToggleSuggestions(true)}
          onClick={() => handleToggleSuggestions(true)}
          onBlur={() => handleToggleSuggestions(false)}
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
        <Suggestions isLoading={isLoading} isSuccess={isSuccess} isError={isError} characters={characters} />
      </div>
    </form>
  );
};
