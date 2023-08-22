import React, { useState, useRef } from 'react';
import './CameraModal.css'; // Add your CSS styling for the modal
import { getImageDetails } from '../../Store/imageSlice';
import { useDispatch } from 'react-redux';

function CameraModal({ onClose, onCapture }) {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [onStart , setOnStart] = useState(false);

  const startCamera = async () => {
    setOnStart(true);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    if (videoRef.current) 
    {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const capturedImageData = canvas.toDataURL('image/jpeg');
      dispatch(getImageDetails(capturedImageData)).then(response => {
        if (response) {
          console.log("Image processing results:", response);
        } else {
          console.log("Image processing failed");
        }
      });
      onCapture(capturedImageData);
      setOnStart(false);
      closeCamera();
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    onCapture(null);
    onClose();
  };

  return (
    <div className="camera-modal">
      <div className="camera-content">
        <video ref={videoRef} autoPlay playsInline />
        <div className="camera-buttons">
          {!onStart && <button onClick={startCamera}>Start Camera</button>}
          {onStart && <button onClick={captureImage}>Capture Image</button>}
          <button onClick={closeCamera}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default CameraModal;
