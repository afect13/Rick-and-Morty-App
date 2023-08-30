import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { getAlertEventFavorites } from '../../features';

export const Alerts = () => {
  const alertEvent = useSelector(getAlertEventFavorites);
  return (
    <div className="fixed flex justify-center bottom-4 left-0 right-0">
      {alertEvent.showIs && alertEvent.message && (
        <div
          className={classNames(
            'flex w-[500px] justify-center items-center rounded-lg text-white font-bold px-6 py-5 text-base',
            {
              ['bg-green-700']: alertEvent.showIs === 'add',
              ['bg-red-700']: alertEvent.showIs === 'remove',
            }
          )}
        >
          <span className="mr-2">{alertEvent.message}</span>
        </div>
      )}
    </div>
  );
};
