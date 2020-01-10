import React, { Component } from "react";
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
  return (
    <div className="TrainingPlan">
      <Navbar />
      <SecNav />
      <UnderNAV Name={Name} />
    </div>
  );
};

const UnderNAV = ({ Name }) => (
  <div className="underNAV" name={Name}>
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">תוכנית אימונים</p>
      </div>
      <div className="userMSG">
        {`שלום ${Name}, בחר בבקשה את תוכנית האימונים הרצויה:`}
      </div>
      <div className="Train-content">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>
            <CustomInput
              type="radio"
              id="exampleCustomRadio1"
              name="customRadio1"
            />
            מסת שריר
          </Card.Header>
          <Card.Body>
            <Card.Text>
              שיטת אימון המותאמת לפיתוח כוחם וגודלם של השרירים. כאשר הוא נערך
              בצורה נכונה, אימון משקולות יכול להביא לשיפור הבריאות ולהרגשה טובה.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>
            <CustomInput
              type="radio"
              id="exampleCustomRadio2"
              name="customRadio2"
            />
            עיצוב וחיטוב
          </Card.Header>
          <Card.Body>
            <Card.Text>
              מטרת פיתוח הגוף היא להציג את מסת השרירים, גודלם וחיטובם, באופן
              האומנותי, הסימטרי והאסתטי ככל האפשר.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>
            <CustomInput
              type="radio"
              id="exampleCustomRadio3"
              name="customRadio3"
            />
            אירובי
          </Card.Header>
          <Card.Body>
            <Card.Text>
              מאמץ גופני תת-מרבי המפעיל קבוצות שרירים גדולות לזמן ממושך, כגון:
              הליכה, ריצה, רכיבה על אופניים, שחייה, סקי, זומבה ועוד.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>
            <CustomInput
              type="radio"
              id="exampleCustomRadio4"
              name="customRadio4"
            />
            אימון פונקציונאלי
          </Card.Header>
          <Card.Body>
            <Card.Text>
              אימון פונקציונלי מאפשר לאמן את הגוף לא כמכלול של שרירים מבודדים,
              אלא כמערכת שלמה המסוגלת לבצע באופן איכותי את הפעולות הכי מגוונות.
            </Card.Text>
          </Card.Body>
        </Card>
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

const mapStateToProps = state => ({ user: state.authReducer.user });
export default connect(mapStateToProps, {})(TrainingPlan);
