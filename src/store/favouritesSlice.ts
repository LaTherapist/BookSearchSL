import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookData } from "./BookData.interface";

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [{}],
  },
  reducers: {
    setFavourite(state, action: PayloadAction<BookData>) {
      state.favourites.push(action.payload)
    }
  },
});

export const { setFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
