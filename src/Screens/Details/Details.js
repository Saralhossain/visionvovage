import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import image1 from "../../Images/colorpic.jpg"

const Details = () => {
  const imageDetails = useSelector((state) => state.image); // Replace with your actual selector logic


  return (
    <div className="image-section" id='details'>
      {imageDetails=== null?
      ( 
        <>
          <div className="image-container">
            <img src={image1} alt="Image" className="image" />
          </div>
          <div className="details-container">
            <p className="description">"description"</p>
            <p className="confidence">Confidence: 78%</p>
          </div>
        </>
      ):(
      <div className="image-section no-data">
        <div className="no-image-container">
          <img src="path_to_your_icon.png" alt="No Image Icon" className="no-image-icon" />
          <p>No Image Uploaded Yet</p>
        </div>
      </div>
      )}
    </div>
  );
};

export default Details;
