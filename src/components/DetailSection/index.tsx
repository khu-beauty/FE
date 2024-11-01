import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './index.scss';

const DetailSection = (toggleMode:any) => {

    const navigate = useNavigate();

    return (
        <div className="detail-section">
            <img className="detail-section-logo" src={Logo} width={320} height={120} alt="" />
            <p className="detail-section-des">노화된 내 얼굴은 어떨까?<br />
            피부 상태를 분석하고 뷰티 솔루션을 찾아봐요🔎</p>
            <p className="detail-section-howto">
            ‘시작하기’를 누르면 촬영이 시작됩니다!<br/>
            안경, 마스크 등의 악세사리 착용을 피해주시고 <br/>
            밝은 조명에서 얼굴을 인식해주세요!
            </p>
            <button className="detail-section-button" onClick={()=>navigate('/camera')}>시작하기</button>
        </div>
    )
}

export default DetailSection;