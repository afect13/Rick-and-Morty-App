import { useSelector } from 'react-redux';

import { Button, HistoryList, LoadingIndicator, PageContent } from '../../components';
import { getHistory, getLoadingButtonAllRemoveHistory, removeAllHistoryLink } from '../../features';
import { useAppDispatch } from '../../store';

export const History = () => {
  const dispatch = useAppDispatch();
  const history = useSelector(getHistory);

  const loading = useSelector(getLoadingButtonAllRemoveHistory);
  const historyNotEmpty = history.length > 0;
  const handleRemoveAll = async () => {
    dispatch(removeAllHistoryLink());
  };
  return (
    <PageContent title={'History'}>
      {historyNotEmpty ? (
        <>
          <ul className="w-full">
            {history.map((h, i) => (
              <HistoryList key={i} link={h} />
            ))}
          </ul>
          <div className="flex w-full justify-center">
            <Button
              onClick={handleRemoveAll}
              type={'button'}
              widthParms={'w-[125px]'}
              name={'Remove all'}
              bgColor={'bg-red-600'}
              withBorder={false}
            >
              {loading && <LoadingIndicator />}
            </Button>
          </div>
        </>
      ) : (
        <div>History not found</div>
      )}
    </PageContent>
  );
};
