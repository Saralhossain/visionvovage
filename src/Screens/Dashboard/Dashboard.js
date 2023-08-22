import React , { useState } from 'react';
import './styles.css';
import image1 from "../../Images/uploadImage.png";
import image2 from "../../Images/clickImage.png";
import useImagePicker from '../../Hooks/useImagePicker';
import { Link } from 'react-router-dom';
// Camera Component
import CameraModal from '../Camera/CameraModal';
import { useDispatch } from 'react-redux';
// import {getImageDetails} from "../../Store/imageSlice";



function Dashboard() {
  const dispatch = useDispatch();
  const { selectedImage, handleImageChange } = useImagePicker();

  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapturedImage = (imageData) => {
    if(imageData !== null)
    {
      console.log("not null");
      setCapturedImage(imageData);
      // dispatch(getImageDetails(imageData)).then(()=>{
      // console.log("Successfull");
      // });
      console.log("csxjdka ");
    }
    setIsCameraModalOpen(false);
  };

  return (
    <div className="dashboard" id='Dashboard'>
       <div className="box">
        <div className="icons">
          <div className="icon">
            <label htmlFor="imageInput">
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : image1} alt="pick img" />
            </label>
            <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            <p className='caption'>Pick Image</p>
          </div>
          <div className="icon" onClick={() => setIsCameraModalOpen(true)} >
            <img src={capturedImage? capturedImage : image2} alt="click img" />
            <p className='caption'>Click Image</p>
          </div>
        </div>
        <div className='show-details' >
          {/* <button className="green-button" to="Details">
            Show Details
          </button> */}
          <Link to='Details'>
              <li className='green-button'>Show Details</li>
          </Link>
        </div>
      </div> 
      {isCameraModalOpen && (
        <CameraModal onClose={() => setIsCameraModalOpen(false)} onCapture={handleCapturedImage} />
      )}
    </div>
  );
}

export default Dashboard;
