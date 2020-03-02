import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

const PersonalDetails = ({ Name, email, Time, date }) => {
  let getTime = moment(date).add('days', Time);

  let currentDate = moment();
  let getUserTrainingTime = getTime.diff(currentDate, 'days');

  return (
    <Fragment>
      <Card border='secondary' style={{ width: '18rem' }}>
        <Card.Header>פרטים אישיים</Card.Header>
        <Card.Body>
          <div className='SettingsHeadline'>שם מלא:</div>
          <div className='SettingsInfo'>{Name}</div>
          <div className='useLine'></div>
          <div className='SettingsHeadline'>כתובת דואר אלקטרוני:</div>
          <div className='SettingsInfo'>{email}</div>
          <div className='useLine'></div>
          <div className='SettingsHeadline'>מספר ימים לסיום המנוי:</div>
          <h4>{getUserTrainingTime}</h4>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default PersonalDetails;
