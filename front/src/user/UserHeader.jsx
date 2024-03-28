import React from 'react';
import { NavLink,Link} from 'react-router-dom'; 
import videoBackground from '/photo/v02.mp4'; 
import useAuth from '../hooks/useAuth';

function UserHeader() {
  const { logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <div className="relative">
      <div className="navbar1 z-10 w-full">
        <div className="flex-1">
          <img src="../photo/logo.jpg" alt="Logo" className='logo'/>
        </div>
        <div className="flex-1 flex justify-center gap-40 ">
          <NavLink exact to="/header" className="mx-6 font-semibold" style={{ color : '#ffff'}}>หน้าหลัก</NavLink>
          <NavLink to="/dressesUser" className="mx-6 font-semibold" activeClassName="text-red-600">สินค้า</NavLink> 
          <NavLink to="/reviewsUser" className="mx-6 font-semibold" activeClassName="text-red-600">รีวิวจากลูกค้า</NavLink>
          <NavLink to="/contactUser" className="mx-6 font-semibold" activeClassName="text-red-600">ติดต่อเรา</NavLink> 
        </div>

        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '1rem' }}>
          <li>
                <Link to='/' onClick={handleLogoutClick}>ออกจากระบบ</Link>
              </li>
          </ul>
        </div>
        <video autoPlay muted loop style={{ position: 'absolute',  width: '100%', height: '780%', objectFit: 'cover', zIndex: -1, filter: 'brightness(34%)' }}>
          <source src={videoBackground} type="video/mp4" />
        </video>
        <p className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{fontSize:'50px',color:'#fff',fontFamily:'fantasy'}}>บริการเช่าชุดราตรี</p>
      </div>
    </div>
  );
}

export default UserHeader;
