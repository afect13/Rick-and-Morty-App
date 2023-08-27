import { useSelector } from 'react-redux';

import { Button, HistoryList, LoadingIndicator, PageContent } from '../../components';
import { clearSpecificArray, getData, getEmail, getHistoryData, getLoadingButtonAllRemove } from '../../features';
import { useAppDispatch } from '../../store';

export const History = () => {
  const dispatch = useAppDispatch();
  const history = useSelector(getHistoryData);
  const email = useSelector(getEmail);
  const loading = useSelector(getLoadingButtonAllRemove);
  const historyNotEmpty = history.length > 0;
  const handleRemoveAll = async () => {
    if (email) {
      await dispatch(clearSpecificArray({ email, arrayIs: 'history' }));
      dispatch(getData(email));
    }
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
