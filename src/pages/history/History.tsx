import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, HistoryItem, LoadingIndicator, NoResultsMessage, PageContent } from '../../components';
import { getHistory, removeAllFromHistory } from '../../features';
import { useAppDispatch } from '../../store';

const History = () => {
  const dispatch = useAppDispatch();
  const history = useSelector(getHistory);

  const [isLoading, setIsLoading] = useState(false);
  const historyNotEmpty = history.length > 0;
  const handleRemoveAll = async () => {
    setIsLoading(true);
    await dispatch(removeAllFromHistory());
    setIsLoading(false);
  };
  return (
    <PageContent title={'History'}>
      {historyNotEmpty ? (
        <>
          <ul className="w-full">
            {history.map((h, i) => (
              <HistoryItem key={i} link={h} />
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
              {isLoading && <LoadingIndicator />}
            </Button>
          </div>
        </>
      ) : (
        <NoResultsMessage message={'History Not Found'} />
      )}
    </PageContent>
  );
};
export default History;
