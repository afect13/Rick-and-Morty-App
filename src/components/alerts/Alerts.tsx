import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { getAlertParams } from '../../features';

export const Alerts = () => {
  const alert = useSelector(getAlertParams);
  return (
    <div className="fixed flex justify-center bottom-4 left-0 right-0">
      {alert.eventType && alert.message && (
        <div
          className={classNames(
            'flex w-[500px] justify-center items-center rounded-lg text-white font-bold px-6 py-5 text-base',
            {
              ['bg-green-700']: alert.eventType === 'add',
              ['bg-red-700']: alert.eventType === 'remove',
            }
          )}
        >
          <span className="mr-2">{alert.message}</span>
        </div>
      )}
    </div>
  );
};
