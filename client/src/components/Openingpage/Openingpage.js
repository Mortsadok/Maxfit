import React from "react";
import PropTypes from "prop-types";
import "../Openingpage/Openingpage.css";
import { Carousel } from "react-bootstrap";
import Health from "../../img/Health.png";
import Subscription from "../../img/Subscription.png";
import TrainingPlan from "../../img/TrainingPlan.png";
import UserSettings from "../../img/UserSettings.png";
import Live from "../../img/Live.png";
import Store from "../../img/Store.png";
import Notifications from "../../img/Notifications.png";
import { Link, Redirect } from "react-router-dom";
import { Badge } from "react-bootstrap";

const Openingpage = () => {
  return (
    <div className="Openingpage">
      <FirstPage />
    </div>
  );
};

const FirstPage = () => (
  <div>
    <div className="badge-headline">
      <Badge pill variant="dark">
        ברוכים הבאים לאפליקציית - Maxfit
      </Badge>
    </div>
    <div className="welcome-text">
      אפליקציית חדר הכושר תאפשר למתאמנים לבצע פעולות כמו: בניית תוכניות אימונים,
      מעקב אחר סטטיסטיקות, לצפות בכמות המתאמנים בזמן אמת, חידוש מנוי, הצהרת
      בריאות, חנות חדר הכושר, עדכונים ועוד.
    </div>

    <div className="Carousel-content ">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Health} alt="Health" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Subscription} alt="Sub" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={TrainingPlan} alt="Plan" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={UserSettings} alt="Settings" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Live} alt="Live" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Store} alt="Store" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Notifications} alt="Notif" />
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="Button-content ">
      <div className="MainPage-text">
        <Link to="/Register">
          <button>הירשם</button>
        </Link>
      </div>

      <div className="MainPage-text">
        <Link to="/Login">
          <button>התחבר</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Openingpage;
