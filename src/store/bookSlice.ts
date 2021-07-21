import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';
import { BookData } from './BookData.interface';
import { RootState } from './store';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async(title: string) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&key=AIzaSyC4QSLTE2fn8nXH-ONLHcM9Kznou42W72w`);
  return ( await response.json()).items as BookData[];
});

export const booksAdapter = createEntityAdapter<BookData>();

const bookSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      booksAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const { selectAll } = booksAdapter.getSelectors((state: RootState) => state.books);

export default bookSlice.reducer;