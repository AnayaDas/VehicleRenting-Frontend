import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import UserNav from './UserNav';

const UserInterface = (props) => {
  return (
    <>
      <div className="conatiner bg-dark m-auto text-center text-light position-relative" style={{ width: '90vw', top: '3vw', fontSize: '3vw', opacity: '0.9', bordeRadius: '20px', height: '90vw' }}>
        <UserNav />

        <div className="container">
          <SideBar />

          <div className="bg-warning position-absolute p-0 end-0" style={{ width: '70vw', height: '85%', borderBottomLeftRadius: '20px' ,borderRadius:'10px'}}>
            <div className="bg-black bg-gradient m-auto position-relative" style={{ top: '2vw', height: '80%', width: '90%', borderRadius: '10px' }}>
              <Outlet />
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default UserInterface;