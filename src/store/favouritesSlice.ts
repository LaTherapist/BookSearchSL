import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BookData} from './BookData.interface';

interface InitialState {
  favourites: {
    [id: string]: BookData;
  };
}

const initialState: InitialState = {
  favourites: {},
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourite(state, action: PayloadAction<BookData>) {
      state.favourites[action.payload.id] = action.payload;
    },
    deleteFavourite(state, action: PayloadAction<BookData>) {
      delete state.favourites[action.payload.id];
    },
  },
});

export const {setFavourite, deleteFavourite} = favouritesSlice.actions;
export default favouritesSlice.reducer;
