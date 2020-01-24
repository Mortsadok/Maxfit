import React, { useState } from "react";
import "../../../css/Myprofile.css";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "reactstrap";
import SecNav from "../SecNav";
import Navbar from "../../Navbar/Navbar";
import { connect } from "react-redux";

const TrainingPlan = ({ user }) => {
  const { Name } = user;
  let name = [];
  const onChange = num => {
    TraningData.forEach(item => {
      if (item.selected === num) {
        return (item.selected = true);
      }
    });
  };
  const TraningData = [
    {
      traningType: "מסת  שריר",
      Name: "radio1",
      customRadio: 1,
      checked: false,
      TraningData:
        " שיטת אימון המותאמת לפיתוח כוחם וגודלם של השרירים. כאשר הוא נערך בצורה נכונה, אימון משקולות יכול להביא לשיפור הבריאות ולהרגשה טובה."
    },
    {
      traningType: "עיצוב וחיטוב",
      Name: "radio2",
      customRadio: 2,
      checked: false,
      TraningData:
        "מטרת פיתוח הגוף היא להציג את מסת השרירים, גודלם וחיטובם, באופן האומנותי, הסימטרי והאסתטי ככל האפשר."
    },
    {
      traningType: "אירובי",
      Name: "radio3",
      customRadio: 3,
      checked: false,
      TraningData:
        " מאמץ גופני תת-מרבי המפעיל קבוצות שרירים גדולות לזמן ממושך, כגון: הליכה, ריצה, רכיבה על אופניים, שחייה, סקי, זומבה ועוד."
    },
    {
      traningType: "אימון פונקציונאלי",
      Name: "radio4",
      customRadio: 4,
      checked: false,
      TraningData:
        "  אימון פונקציונלי מאפשר לאמן את הגוף לא כמכלול של שרירים מבודדים,  אלא כמערכת שלמה המסוגלת לבצע באופן איכותי את הפעולות הכי מגוונות."
    }
  ];
  if (Name !== undefined) {
    name = Name.split(" ");
  }
  return (
    <div className="TrainingPlan">
      <Navbar />
      <SecNav />
      <UnderNAV Name={name[0]} TraningData={TraningData} onChange={onChange} />
    </div>
  );
};
const UnderNAV = ({ Name, TraningData, onChange }) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">תוכנית אימונים</p>
      </div>
      <div className="userMSG">
        {`שלום ${Name}, בחר בבקשה את תוכנית האימונים הרצויה:`}
      </div>
      <div className="Train-content">
        {TraningData.map((data, index) => (
          <Card border="secondary" key={index} style={{ width: "18rem" }}>
            <Card.Header>
              <CustomInput
                type="radio"
                id={data.customRadio}
                name={data.Name}
                onChange={() => onChange(data.customRadio)}
                checked={data.checked}
              />
              {data.traningType}
            </Card.Header>
            <Card.Body>
              <Card.Text>{data.TraningData}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="userMSG">כמה אימונים בשבוע?</div>
      <div className="DaysTrain">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
          <Button variant="secondary">4</Button>
          <Button variant="secondary">5</Button>
        </ButtonGroup>
      </div>
      <div className="sendBtn">
        <div className="btnsnd">
          <Form>
            <Button variant="outline-dark" type="submit">
              בקש תוכנית אימונים
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps)(TrainingPlan);
