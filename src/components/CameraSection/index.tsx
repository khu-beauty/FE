import { useEffect, useRef, useState } from "react";
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';
import './index.scss';

const CameraSection = () => {

    const webcamRef = useRef<any>(null);
    const [age, setAge] = useState<any>(null);
    const [imageSrc, setImageSrc] = useState<any>(null);
    const [isActive, setIsActive] = useState(true);
    const [isOk, setIsOk] = useState<any>(null);
    
    useEffect(() => {
        // Load the models
        const loadModels = async () => {
          await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
          await faceapi.nets.ageGenderNet.loadFromUri('/models');
        };
    
        loadModels();
      }, []);
    
    //   const captureImage = async () => {

    //     if (imageSrc) {
    //         // 캡쳐된 이미지가 이미 있는 경우 이미지, 나이 flush
    //         setImageSrc(null);
    //         setAge(null);
    //         setIsActive(true);
    //     }
    //     if (webcamRef.current)  {
    //         // 이미지 캡쳐 및 얼굴 인식, 나이 추정
    //       let image = webcamRef.current.getScreenshot();
    //       image = await faceapi.fetchImage(image);
    //       const detections = await faceapi
    //           .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions())
    //           .withAgeAndGender();
      
    //         if (detections) {
    //             setImageSrc(image);
    //             console.log(image);
    //             setAge(Math.round(detections.age));
    //             setIsActive(false);
    //             // Round the age to the nearest whole number
    //         }
        
    //     }
    //   };

      const captureImage = () => {
        if (imageSrc) {
                    // 캡쳐된 이미지가 이미 있는 경우 이미지, 나이 flush
            setImageSrc(null);
            setAge(null);
            setIsActive(true);
        }
        if (webcamRef.current) {
          const image = webcamRef.current.getScreenshot();
          setImageSrc(image);
          estimateAge(image);
          setIsActive(false);
        }
      };
    
      const estimateAge = async (image:any) => {
        const img = await faceapi.fetchImage(image);
        const detections = await faceapi
          .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
          .withAgeAndGender();
    
        if (detections?.age) {
          setAge(Math.round(detections.age));
          setIsOk(true); // Round the age to the nearest whole number
        }
        else {
            setIsOk(false);
        }
      };

    //   const detectFace = async () => {
    //     if (
    //       webcamRef.current
    //     ) {
    //       const video = webcamRef.current.video;
    //       const detections = await faceapi
    //         .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
    
    //       if (detections) {
    //         // 얼굴 인식 성공
    //         setIsOk(!isOk);
    //         // Round the age to the nearest whole number
    //       }
    
    //       // Call this function recursively for real-time updates
    //       setTimeout(() => detectFace(), 100); // Adjust the interval as needed
    //     }
    //   };
    
  

    return (
        <div className="camera-section">
            {isActive ?  <Webcam ref={webcamRef} screenshotFormat="image/jpeg" style={{ width: 500, height: 400 }}/> :
        (
            imageSrc && <img src={imageSrc} alt="Captured" style={{ width: 500, height: 400 }} />
          )

        }
           <div>
          
            <button onClick={captureImage}>{imageSrc ? "다시 촬영" : "사진 촬영"}</button>
            {age ? <h2>추정 나이 : {age}</h2> :
            isActive === false && <p>얼굴 인식 실패</p>
            }
           </div>
        </div>
    )
}

export default CameraSection;