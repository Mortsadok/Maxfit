import React, { Fragment } from 'react';
import '../../css/Myprofile.css';
import Navbar from '../Navbar/Navbar';
import SecNav from './SecNav';
import MediaQuery from 'react-responsive';
import MobileNav from '../Mobile/MobileNav';

const Myprofile = () => {
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <SecNav />
        <MobileMyProfile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className='Myprofile'>
          <Navbar />
          <SecNav />
        </div>
      </MediaQuery>
    </Fragment>
  );
};
const MobileMyProfile = () => (
  <div className='Mobile'>
    <main className='main'></main>
  </div>
);
export default Myprofile;
