import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';
import { BookData } from './BookData.interface';
import { RootState } from './store';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async(title: string) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&key=AIzaSyC4QSLTE2fn8nXH-ONLHcM9Kznou42W72w`);
  const data: BookData[] = response.data.items;

  const correctLinksData = data.map((book) => {
    const image = book.volumeInfo.imageLinks;
    if (image) {
      image.thumbnail = image.thumbnail.replace('http', 'https');
    }
    return book;
  });

  return correctLinksData;
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