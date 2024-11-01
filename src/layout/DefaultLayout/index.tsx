import { Outlet } from 'react-router-dom';
import Header from './Header';
import './index.scss'

const DefaultLayout = () => {

  return (
    <div className="main-container">
       <Outlet />
    </div>
   
  );
};
  
export default DefaultLayout;