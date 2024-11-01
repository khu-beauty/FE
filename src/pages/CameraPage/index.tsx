import CameraSection from "../../components/CameraSection"
import Logo from '../../assets/logo.png';
import './index.scss';

const CameraPage = () => {

    return (
        <div className="camera-content-wrapper">
            <img className="camera-content-wrapper-logo" src={Logo} width={320} height={100} />
            <CameraSection />
        </div>
    )
}

export default CameraPage;