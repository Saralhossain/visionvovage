import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { API_KEY } from "../Components/Constants";
import axios from 'axios';

export const getImageDetails = createAsyncThunk(
  'images/getImageDetails',
  async (image , thunkAPI) => {
    console.log("handler Image Click", image);
    let data;
    if (image) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result.split(',')[1]; // Extract base64 data
        let body = {
          tkn: "7DE11159-CA11-4197-95EC-A4D3C3C8D759AB865DCE-6A00-4D6C-AB7F-E24F9DAF1AE2",
          modelVersion: "2.1_full",
          input: `data:image/jpeg;base64,${base64Image}`, // Use the base64 image as input
          visionParams: "gpt, describe, describe_all, tags, objects",
          gpt_prompt: "",
          gpt_length: "90"
        };
        try {
          const result = await axios.post('https://vision.astica.ai/describe', body);
          console.log("Results: ", result?.data);
          data = result?.data;
          data.image = image;
        } catch (error) {
          console.error('Error uploading image:', error);
          return null;
        }
      }
    }
  return data;
})

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