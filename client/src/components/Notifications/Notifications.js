import React, { Fragment } from 'react';
import './Notifications.css';
import Toast from 'react-bootstrap/Toast';
import Navbar from '../Navbar/Navbar';
import MediaQuery from 'react-responsive';
import MobileNav from '../Mobile/MobileNav';

const Notifications = () => {
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <NotificationMobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Notifications'>
          <div className='NotificationsCenter'>
            <NotificationsBox1 />
            <NotificationsBox2 />
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const NotificationsBox1 = () => (
  <div className='NotificationsBox1'>
    <p className='font-weight-light'>עדכונים</p>
    <Toast>
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
        <strong className='mr-auto'>מנהל חדר הכושר</strong>
      </Toast.Header>
      <Toast.Body>.הודעה חדשה ממנהל חדר הכושר</Toast.Body>
    </Toast>
  </div>
);

const NotificationsBox2 = () => (
  <div className='NotificationsBox2'>
    <p className='font-weight-light'>שעות פתיחה</p>
    <div className='OpenHours'>
      <div className='li-att '>ראשון - חמישי</div>
      <li className='font-weight-light'>22:00 - 9:00</li>

      <div className='Main-Padding'></div>
      <div className='Line'></div>

      <div className='li-att '>שישי</div>
      <li className='font-weight-light'>15:00 - 9:00</li>

      <div className='Main-Padding'></div>
      <div className='Line'></div>

      <div className='li-att '>שבת</div>
      <li className='font-weight-light'>22:00 - 8:00</li>
    </div>
  </div>
);
const NotificationMobile = () => (
  <div className='Mobile'>
    <div className='notificationsMobile'>
      <main className='main'>
        <NotificationsBox1 />
        <NotificationsBox2 />
      </main>
    </div>
  </div>
);
export default Notifications;
