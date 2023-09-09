import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LoadingSvg } from '../../assets/svg/loading.svg';
import { getSuggestionsIs, setSuggestions } from '../../features';
import { Character } from '../../models';
import { useAppDispatch } from '../../store';

type Props = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  characters: Character[] | undefined;
};

export const Suggestions = ({ isLoading, isError, isSuccess, characters }: Props) => {
  const dispatch = useAppDispatch();
  const suggestionsIs = useSelector(getSuggestionsIs);
  const navigate = useNavigate();
  const handleRedirect = (id: number) => {
    navigate(`/character/${id}`);
    dispatch(setSuggestions(false));
  };
  if (suggestionsIs) {
    return (
      <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[245px] overflow-y-auto shadow-md bg-white">
        {isLoading && (
          <li className="flex justify-center py-2 px-4">
            <LoadingSvg className="h-8 w-8 fill-green-800 " />
          </li>
        )}
        {isError && <li className="py-2 px-4 text-red-500">Character not Found</li>}
        {isSuccess &&
          characters?.slice(0, 5).map((c) => (
            <li
              onClick={() => handleRedirect(c.id)}
              key={c.id}
              className="py-2 px-4 hover:bg-zinc-400 hover:text-zinc-50 transition-colors cursor-pointer"
            >
              {c.name}
            </li>
          ))}
      </ul>
    );
  } else {
    return null;
  }
};
