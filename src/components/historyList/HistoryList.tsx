import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, LoadingIndicator } from '..';
import { addedTarget, getData, getEmail, mutationData } from '../../features';
import { useAppDispatch } from '../../store';
import { getLoadingButton } from './../../features/data/data.selectors';

interface Props {
  link: string;
}
export const HistoryList = ({ link }: Props) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getEmail);
  const loadingButton = useSelector(getLoadingButton);
  const handleRemoveHistory = async () => {
    if (email) {
      dispatch(addedTarget(link));
      await dispatch(mutationData({ email, data: link, param: 'remove', arrayIs: 'history' }));
      dispatch(getData(email));
    }
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
          {loadingButton === link && <LoadingIndicator />}
        </Button>
      </div>
    </li>
  );
};
