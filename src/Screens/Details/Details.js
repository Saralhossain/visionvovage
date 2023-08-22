import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import image1 from "../../Images/colorpic.jpg";

const Details = () => {
  const imageDetailsList = useSelector((state) => state.image.images);

  return (
    <div className="image-section" id='details'>
      {imageDetailsList.length > 0 ? (
        <div className="image-list">
          {imageDetailsList.map((imageDetails, index) => (
            <div key={index} className="image-details">
              <div className="image-container">
                <img src={imageDetails.image} alt="Image" className="image" />
              </div>
              <div className="details-container">
                <p className="description">{imageDetails?.response?.caption?.text}</p>
                {imageDetails?.response && (
                  <p className="confidence">
                    Confidence: {(imageDetails?.response?.caption?.confidence * 100).toFixed(2)}%
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-image-container">
          <img src={image1} alt="No Image Icon" className="no-image-icon" />
          <p>No Images Uploaded Yet</p>
        </div>
      )}
    </div>
  );
};

export default Details;
