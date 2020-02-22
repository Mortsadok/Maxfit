import React, { Fragment, useEffect } from 'react';
import './Notifications.css';
import Toast from 'react-bootstrap/Toast';
import Navbar from '../Navbar/Navbar';
import MediaQuery from 'react-responsive';
import MobileNav from '../Mobile/MobileNav';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import {
  getUpdates,
  changeReadMessage,
  deleteNotification
} from '../../actions/updateAction';
const Notifications = ({
  getUpdates,
  get_updates,
  changeReadMessage,
  deleteNotification
}) => {
  useEffect(() => {
    getUpdates();
  }, []);
  useEffect(() => {
    getUpdates();
  });
  let style = {
    backgroundColor: '#e3e3e3'
  };
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <NotificationMobile
          get_updates={get_updates}
          changeReadMessage={changeReadMessage}
          deleteNotification={deleteNotification}
          style={style}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <Navbar />
        <div className='Notifications'>
          <div className='NotificationsCenter'>
            <NotificationsBox1
              get_updates={get_updates}
              style={style}
              deleteNotification={deleteNotification}
              changeReadMessage={changeReadMessage}
            />
            <NotificationsBox2 />
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const NotificationsBox1 = ({
  get_updates,
  changeReadMessage,
  deleteNotification
}) => (
  <div className='NotificationsBox1'>
    <p className='font-weight-light'>עדכונים</p>
    {get_updates.map(update => (
      <Fragment key={update._id}>
        <Toast
          onClose={() => deleteNotification(update._id)}
          onClick={() => changeReadMessage(update._id, true)}
          id={!update.readMessage ? 'toastBackground' : 'toastReadMessage'}
        >
          <Toast.Header
            id={!update.readMessage ? 'toastBackground' : 'toastReadMessage'}
          >
            <img
              src='holder.js/20x20?text=%20'
              className='rounded mr-2'
              alt=''
            />
            <strong className='mr-auto'>
              הודעה מאת {`${update.firstname}  ${update.lastname}`}
            </strong>
          </Toast.Header>
          <Toast.Body id={!update.readMessage ? 'toastFontColor' : null}>
            {update.update}
          </Toast.Body>
        </Toast>
      </Fragment>
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
const NotificationMobile = ({
  get_updates,
  changeReadMessage,
  style,
  deleteNotification
}) => (
  <div className='Mobile'>
    <div className='notificationsMobile'>
      <main className='main'>
        <NotificationsBox1
          style={style}
          get_updates={get_updates}
          changeReadMessage={changeReadMessage}
          deleteNotification={deleteNotification}
        />
        <NotificationsBox2 />
      </main>
    </div>
  </div>
);
Notifications.propTypes = {
  getUpdates: PropTypes.array,
  changeReadMessage: PropTypes.func,
  getUpdates: PropTypes.func
};
const mapStateToProps = state => ({
  get_updates: state.updatesReducer.get_updates
});
export default connect(mapStateToProps, {
  getUpdates,
  changeReadMessage,
  deleteNotification
})(Notifications);
