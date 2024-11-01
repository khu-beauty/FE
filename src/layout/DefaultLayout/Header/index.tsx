import './index.scss';
import Logo from '../../../assets/khu-Beauty.png';
const Header = () => {

    return (
        <header className="header">
            <img src={Logo} alt="" width={100} height={20}/>
        </header>
    )
}


export default Header;