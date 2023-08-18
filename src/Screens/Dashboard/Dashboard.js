import React from 'react';
import './styles.css';
import image1 from "../../Images/uploadImage.png";
import image2 from "../../Images/clickImage.png";
import useImagePicker from '../../Hooks/useImagePicker';

function Dashboard() {
  const { selectedImage, handleImageChange } = useImagePicker();

  return (
    <div className="dashboard" id='dashboard'>
       <div className="box">
        <div className="icons">
          <div className="icon">
            <label htmlFor="imageInput">
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : image1} alt="Image Picker" />
            </label>
            <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            <p className='caption'>Pick Image</p>
          </div>
          <div className="icon" >
            <img src={image2} alt="Click Image from Camera" />
            <p className='caption'>Click Image</p>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Dashboard;
