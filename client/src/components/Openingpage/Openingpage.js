import React from "react";
import "../Openingpage/Openingpage.css";
import { Carousel } from "react-bootstrap";
import Health from "../../img/Health.png";
import Myprofile from "../../img/Myprofile.png";
import Subscription from "../../img/Subscription.png";
import TrainingPlan from "../../img/TrainingPlan.png";
import { Link } from "react-router-dom";

const Openingpage = () => {
  return (
    <div className="Openingpage">
      <FirstPage />
    </div>
  );
};

const FirstPage = () => (
  <div>
    <h2> ברוכים הבאים לאפליקציית - Maxfit!</h2>
    <div className="welcome-text">
      אפליקציית חדר הכושר תאפשר למתאמני חדר הכושר לבצע פעולות כמו: בניית תוכניות
      אימונים, מעקב אחר סטטיסטיקות, לצפות בכמות המתאמנים בזמן אמת, חידוש מנוי,
      הצהרת בריאות, חנות חדר הכושר, עדכונים ועוד.
    </div>
    <div className="Carousel-content ">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={Health} alt="Maxfit Dashboard" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Myprofile}
            alt="New Client page"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Subscription} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={TrainingPlan} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="Button-content ">
      <div className="MainPage-text">
        נשמע מעניין?
        <Link to="/Register">
          <button>הירשם עכשיו</button>
        </Link>
      </div>
      <div className="MainPage-text">
        כבר רשום?
        <Link to="/Login">
          <button>התחבר</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Openingpage;
