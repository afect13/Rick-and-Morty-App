import { createAction } from '@reduxjs/toolkit';

export const setAlertParams = createAction('global/addedAlert', (message: string, eventType: string) => {
  return {
    payload: {
      eventType,
      message,
    },
  };
});

export const clearAlertParams = createAction('global/removeAlert', () => {
  return {
    payload: {
      eventType: null,
      message: null,
    },
  };
});
export const setInputConsoleArguments = createAction(
  'global/setInputConsoleArguments',
  (command: string, params?: string[]) => {
    return {
      payload: {
        command,
        params,
      },
    };
  }
);
