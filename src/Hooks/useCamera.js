import { useState, useRef } from 'react';

function useCamera() {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStream(stream);
      }
    } catch (error) {
      console.error('Error starting camera:', error);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const file = new File([blob], 'captured_image.jpeg', { type: 'image/jpeg' });
      }, 'image/jpeg');

      
      console.log(canvas);

    }
  };

  return {
    startCamera,
    captureImage,
    videoRef,
  };
}

export default useCamera;
