import React, { Fragment, useEffect } from 'react';
import './Notifications.css';
import Toast from 'react-bootstrap/Toast';
import Navbar from '../Navbar/Navbar';
import MediaQuery from 'react-responsive';
import MobileNav from '../Mobile/MobileNav';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getUpdates } from '../../actions/updateAction';
const Notifications = ({ getUpdates, get_updates }) => {
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
        <NotificationMobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Notifications'>
          <div className='NotificationsCenter'>
            <NotificationsBox1 get_updates={get_updates} />
            <NotificationsBox2 />
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const NotificationsBox1 = ({ get_updates }) => (
  <div className='NotificationsBox1'>
    <p className='font-weight-light'>עדכונים</p>
    {get_updates.map(update => (
      <Toast>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>
            הודעה מאת {`${update.firstname}  ${update.lastname}`}
          </strong>
        </Toast.Header>
        <Toast.Body>{update.update}</Toast.Body>
      </Toast>
    ))}
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
Notifications.propTypes = {
  getUpdates: PropTypes.array
};
const mapStateToProps = state => ({
  get_updates: state.updatesReducer.get_updates
});
export default connect(mapStateToProps, { getUpdates })(Notifications);
