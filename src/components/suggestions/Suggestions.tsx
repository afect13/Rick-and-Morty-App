import { useNavigate } from 'react-router-dom';

import { ReactComponent as LoadingSvg } from '../../assets/svg/loading.svg';
import { Character } from '../../models';

interface Props {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  characters: Character[] | undefined;
}

export const Suggestions = ({ isLoading, isError, isSuccess, characters }: Props) => {
  const navigate = useNavigate();
  return (
    <ul className=" list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-auto shadow-md bg-white">
      {isLoading && (
        <li className="flex justify-center py-2 px-4">
          <LoadingSvg className="h-8 w-8 fill-green-800 " />
        </li>
      )}
      {isError && <li className="py-2 px-4 text-red-500">Character not Found</li>}
      {isSuccess &&
        characters?.slice(0, 5).map((c) => (
          <li
            onClick={() => navigate(`/character/${c.id}`)}
            key={c.id}
            className="py-2 px-4 hover:bg-zinc-400 hover:text-zinc-50 transition-colors cursor-pointer"
          >
            {c.name}
          </li>
        ))}
    </ul>
  );
};
