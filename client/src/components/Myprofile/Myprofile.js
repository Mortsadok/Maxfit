import React, { Fragment, useEffect } from 'react';
import '../../css/Myprofile.css';
import Navbar from '../Navbar/Navbar';
import SecNav from './SecNav';
import MediaQuery from 'react-responsive';
import MobileNav from '../Mobile/MobileNav';
import { connect } from 'react-redux';
import { getUpdates } from '../../actions/updateAction';
const Myprofile = ({ getUpdates }) => {
  useEffect(() => {
    getUpdates();
  }, []);
  useEffect(() => {
    getUpdates();
  });
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
export default connect(null, { getUpdates })(Myprofile);
