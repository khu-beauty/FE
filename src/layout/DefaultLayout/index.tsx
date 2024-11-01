import { Outlet } from 'react-router-dom';
import Header from './Header';
import './index.scss'

const DefaultLayout = () => {

  return (
    <div className="main-container">
      <Header />
      <div className="main-container-contents">
        <Outlet />
      </div>
    </div>
   
  );
};
  
export default DefaultLayout;