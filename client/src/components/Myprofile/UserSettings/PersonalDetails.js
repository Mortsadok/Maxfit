import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const PersonalDetails = ({ Name, email }) => {
  return (
    <Fragment>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header>פרטים אישיים</Card.Header>
        <Card.Body>
          <div className="SettingsHeadline">שם מלא</div>
          <div className="SettingsInfo">{Name}</div>
          <div className="Settingsline">___________________________</div>
          <div className="SettingsHeadline">כתובת דואר אלקטרוני:</div>
          <div className="SettingsInfo">{email}</div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default PersonalDetails;
