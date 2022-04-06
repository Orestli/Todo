import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface IState {
  photos: {
    albumId: number | null;
    id: number | null;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
}

const initialState: IState = {
  photos: [],
};

const PhotosReducer = createSlice({
  name: 'photos/reducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async (id: number) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);

    return data;
  }
);

export default PhotosReducer.reducer;
