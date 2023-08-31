import { createAction } from '@reduxjs/toolkit';

export const setAlertParams = createAction('favorites/addedAlert', (message: string, eventType: string) => {
  return {
    payload: {
      eventType,
      message,
    },
  };
});

export const clearAlertParams = createAction('favorites/removeAlert', () => {
  return {
    payload: {
      eventType: null,
      message: null,
    },
  };
});
