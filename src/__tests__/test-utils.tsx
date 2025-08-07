import React, { type JSX, type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { pokemonApi } from '../core/services';

interface RootState {
  [pokemonApi.reducerPath]: ReturnType<typeof pokemonApi.reducer>;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: RootState;
  store?: ReturnType<typeof setupStore>;
}

const setupStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  });
};

export function renderWithProviders(ui: React.ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}) {
  const { preloadedState = {}, store = setupStore(preloadedState as RootState), ...renderOptions } = extendedRenderOptions;

  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
