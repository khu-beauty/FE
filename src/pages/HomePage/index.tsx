import './index.scss';
import Logo from '../../assets/khu-Beauty.png';
import { useRef, useState, useEffect } from 'react';
import CameraSection from '../../components/CameraSection';


const HomePage = () => {
    




    return (
        <div className="home-background">
            <div className="home-content-wrapper">
                <img src={Logo} width={160} height={80} />
                <CameraSection />
            </div>
        </div>
    )
}

export default HomePage;