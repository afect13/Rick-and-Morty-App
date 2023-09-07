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
export const setSearch = createAction('global/search', (search: string) => {
  return {
    payload: search,
  };
});
export const suggestionsInFocus = createAction('global/suggestions', (isFocus: boolean) => {
  return {
    payload: isFocus,
  };
});

export const setSuggestions = createAction('global/suggestions', (suggestionsIs: boolean) => {
  return {
    payload: suggestionsIs,
  };
});
