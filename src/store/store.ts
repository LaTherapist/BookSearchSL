import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import favouritesReducer from './favouritesSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    favourites: favouritesReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;