import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../Components/Constants';
import axios from 'axios';

// Define a function to send image details to the server
const sendImageDetailsToServer = async (image, response) => {
  try {
    const res = await axios.post('http://localhost:5000/upload', {
      image: image,
      text: response?.data?.caption?.text,
      confidence: response?.data?.caption?.confidence
    });
    console.log("server response", res);
  } catch (err) 
    {
      console.log("Api call error : ", err);
    }
};

export const getImageDetails = createAsyncThunk(
  'images/getImageDetails',
  async (image, thunkAPI) => {
    if (!image) {
      return null;
    }

    try {
      const body = {
        tkn: API_KEY.api_key,
        modelVersion: '2.1_full',
        input: image,
        visionParams: 'gpt, describe, describe_all, tags, objects',
        gpt_prompt: '',
        gpt_length: '90',
      };

      const response = await axios.post('https://vision.astica.ai/describe', body);
      const data = response.data;

       // Call the function to send image details to the server
       await sendImageDetailsToServer(image, response);

      return {
        image: image, // Store the incoming image
        response: data, // Store the API response
      };
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }
);

export const imageSlice = createSlice({
  name: 'counter',
  initialState: {
    images: [], // Initialize images as an array
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImageDetails.fulfilled, (state, action) => {
      // Add the incoming image and API response to the images array
      state.images.push(action.payload);
    });
  },
});

export default imageSlice.reducer;
