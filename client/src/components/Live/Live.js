import React, { Fragment, useRef, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Live.css';
import Navbar from '../Navbar/Navbar';
import MobileNav from '../Mobile/MobileNav';
import MediaQuery from 'react-responsive';
import moment from 'moment';

const Live = () => {
  const getCurrentTime = () => {
    setTime(moment().format('h:mm:ss'));
  };
  const [getTime, setTime] = useState(null);
  useEffect(() => {
    setInterval(() => {
      getCurrentTime();
    }, 1000);
  });
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <MobileLive />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className='Live'>
          <Navbar />
          <LiveCenter getTime={getTime} />
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const LiveCenter = ({ getTime }) => (
  <div className='LiveCenter'>
    <div className='Inside_LiveStore'>
      <p className='font-weight-light'>מתאמנים בזמן אמת</p>
      <div className='Time-content'>
        <div className='Time2'>
          <div className='Time1'>
            <div className='Time'>{getTime}</div>
          </div>
        </div>
        <Spinner animation='grow' size='la' />
        <div className='SpinnerClass'>
          <div className='Inside2'>
            <div className='Inside1'>
              <div className='Inside'>
                <h1 className='countExmple'>3</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='Date2'>
          <div className='Date1'>
            <div className='Date' id='datePosition'>
              {moment().format('DD/MM/YYYY')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const MobileLive = () => (
  <div className='Mobile'>
    <main className='main'>
      <LiveCenter />
    </main>
  </div>
);
export default Live;
