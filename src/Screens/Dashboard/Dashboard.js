import React , { useState } from 'react';
import './styles.css';
import image1 from "../../Images/uploadImage.png";
import image2 from "../../Images/clickImage.png";
import useImagePicker from '../../Hooks/useImagePicker';
// Camera Component
import CameraModal from '../Camera/CameraModal';

import { Link as ScrollLink } from 'react-scroll';



function Dashboard() {
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
          <ScrollLink
              to="details-section" // This should match the ID of your Details component's section
              smooth={true}
              duration={500} // Duration of the scroll animation in milliseconds
              offset={-70} // Offset for the scrolled position (adjust as needed)
            >
              <li className='green-button'>Show Details</li>
            </ScrollLink>
        </div>
      </div> 
      {isCameraModalOpen && (
        <CameraModal onClose={() => setIsCameraModalOpen(false)} onCapture={handleCapturedImage} />
      )}
    </div>
  );
}

export default Dashboard;
