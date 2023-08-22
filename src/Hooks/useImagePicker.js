import { useState } from 'react';
import axios from 'axios';
import { API_KEY } from "../Components/Constants";
import { setImageDetails , getImageDetails } from '../Store/imageSlice';
import { useDispatch } from 'react-redux';

function useImagePicker() {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  // const [response, setResponse] = useState();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    console.log(image);
    handleImageClick(image);
  };

  const handleImageClick = async (image) => {
    if (image) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result.split(',')[1];
        dispatch(getImageDetails(`data:image/jpeg;base64,${base64Image}`)).then(response => {
          if (response) {
            console.log("Image processing results:", response);
          } else {
            console.log("Image processing failed");
          }
        });
      };
      reader.readAsDataURL(image); 
    }
  };

  return {
    selectedImage,
    handleImageChange,
  };
}

export default useImagePicker;
