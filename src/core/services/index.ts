import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const parseErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined): string => {
  if (!error) return 'Something went wrong';

  if (error && 'data' in error && error.data && typeof error.data === 'object' && 'message' in error.data) {
    return error.data.message as string;
  }
  if (error && 'message' in error && error.message) return error.message;
  if (error && 'error' in error && error.error) return error.error;

  return 'Something went wrong';
};

export * from './pokemonApi';
