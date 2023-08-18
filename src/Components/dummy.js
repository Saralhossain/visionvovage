import React from 'react';
import './styles.css'; // Import your CSS file for styling

function dummy() {
  return (
    <div className="container">
      <div className="button-container">
        <button className="upload-button">
          <img src="upload-icon.png" alt="Upload Icon" className="icon" />
          Upload Image
        </button>
        <button className="camera-button">
          <img src="camera-icon.png" alt="Camera Icon" className="icon" />
          Click Picture
        </button>
      </div>
      <div className="picture-frame">
        <img src="dummy-picture.png" alt="Dummy Picture" className="dummy-picture" />
      </div>
    </div>
  );
}

export default dummy;
