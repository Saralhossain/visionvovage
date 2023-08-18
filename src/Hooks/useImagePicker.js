import { useState } from 'react';
import axios from 'axios';
// import { API_KEY } from "../Components/Constants";
import { setImageDetails } from '../Store/imageSlice';
import { useDispatch } from 'react-redux';

function useImagePicker() {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    console.log(image);
    handleImageClick(image);
  };

  const handleImageClick = async (image) => {
    console.log("handler Image Click", image);
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
          setResponse(result);
          console.log("Results: ", result?.data);
          dispatch(setImageDetails(result?.data?.caption));
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
      reader.readAsDataURL(image); // Read the selected image as a base64 string
    }
  };

  return {
    selectedImage,
    handleImageChange,
  };
}

export default useImagePicker;
