import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { API_KEY } from "../Components/Constants";
import axios from 'axios';

export const getImageDetails = createAsyncThunk(
  'images/getImageDetails',
  async (thunkAPI) => {
    const response = await axios.post('https://books-list-api.vercel.app/books', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY.api_key,
      },
    });
  const data = await response.json();
  return data;
}
)

export const imageSlice = createSlice({
  name: 'counter',
  initialState: {
    image:null,
  },
  reducers: {
    setImageDetails: (state , action) => {
      console.log("redux store",action.payload);
      state.image = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImageDetails.fulfilled, (state, action) => {
      state.books = action.payload.data;
    });
  },
})

export const { setImageDetails } = imageSlice.actions


export default imageSlice.reducer