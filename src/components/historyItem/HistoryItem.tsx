import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, LoadingIndicator } from '../../components';
import { removeFromHistory } from '../../features';
import { useAppDispatch } from '../../store';

type Props = {
  link: string;
};
export const HistoryItem = ({ link }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleRemoveHistory = async () => {
    setIsLoading(true);
    await dispatch(removeFromHistory(link));
    setIsLoading(false);
  };
  return (
    <li className="flex justify-between mx-auto  bg-zinc-200 rounded-lg p-2.5 w-[500px] mb-8">
      <div className="flex items-center">
        <Link
          to={`/search?q=${link}`}
          className="my-2 text-center text-2xl font-bold underline tracking-tight text-blue-600"
        >
          {link}
        </Link>
      </div>
      <div className="flex items-center pl-4 border-zinc-900/20 border-l">
        <Button
          onClick={handleRemoveHistory}
          type={'button'}
          widthParms={'w-[90px]'}
          name={'Remove'}
          bgColor="bg-red-600"
          withBorder={true}
        >
          {isLoading && <LoadingIndicator />}
        </Button>
      </div>
    </li>
  );
};
