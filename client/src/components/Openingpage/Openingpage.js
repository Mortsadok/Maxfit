import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../css/Mobile.css';
import './Openingpage.css';
import { Carousel } from 'react-bootstrap';
import Health from '../../img/Health.png';
import logo from '../../img/logo.png';
import Subscription from '../../img/Subscription.png';
import TrainingPlan from '../../img/TrainingPlan.png';
import UserSettings from '../../img/UserSettings.png';
import Live from '../../img/Live.png';
import Store from '../../img/Store.png';
import Notifications from '../../img/Notifications.png';
import MediaQuery from 'react-responsive';
import { Link, Redirect } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const OpeningPage = () => {
  const images = [
    { src: Notifications, alt: 'Notifications' },
    { src: Store, alt: 'Store' },
    { src: UserSettings, alt: 'UserSettings' },
    { src: TrainingPlan, alt: 'TrainingPlan' },
    { src: Health, alt: 'Health' },
    { src: Live, alt: 'Live' },
    { src: Subscription, alt: 'Subscription' }
  ];
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileMain images={images} />
      </MediaQuery>
      <div className='Openingpage'>
        <MediaQuery minDeviceWidth={1280}>
          <FirstPage images={images} />
        </MediaQuery>
      </div>
    </Fragment>
  );
};
const MobileMain = ({ images }) => (
  <div className='Mobile'>
    <main className='main'>
      <img id='logo' src={logo} alt={logo} />

      <header className='Mobile-Main-Title'>
        <Badge pill variant='dark'>
          ברוכים הבאים לאפליקציית - Maxfit
        </Badge>
      </header>
      <div className='Mobile-Main-Text'>
        אפליקציית חדר הכושר תאפשר למתאמנים לבצע פעולות כמו: בניית תוכניות
        אימונים, מעקב אחר סטטיסטיקות, לצפות בכמות המתאמנים בזמן אמת, חידוש מנוי,
        הצהרת בריאות, חנות חדר הכושר, עדכונים ועוד.
      </div>
      <div className='Carousel-content '>
        <Carousel>
          {images.map(img => (
            <Carousel.Item>
              <img className='d-block w-100 ' src={img.src} alt={img.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='Button-content '>
        <div className='MainPage-text'>
          <Link to='/Register'>
            <button>הירשם</button>
          </Link>
        </div>

        <div className='MainPage-text'>
          <Link to='/Login'>
            <button>התחבר</button>
          </Link>
        </div>
      </div>
    </main>
  </div>
);
const FirstPage = ({ images }) => (
  <Fragment>
    <div className='badge-headline'>
      <Badge pill variant='dark'>
        ברוכים הבאים לאפליקציית - Maxfit
      </Badge>
    </div>
    <div className='welcome-text'>
      אפליקציית חדר הכושר תאפשר למתאמנים לבצע פעולות כמו: בניית תוכניות אימונים,
      מעקב אחר סטטיסטיקות, לצפות בכמות המתאמנים בזמן אמת, חידוש מנוי, הצהרת
      בריאות, חנות חדר הכושר, עדכונים ועוד.
    </div>

    <div className='Carousel-content '>
      <Carousel>
        {images.map(img => (
          <Carousel.Item>
            <img className='d-block w-100' src={img.src} alt={img.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    <div className='Button-content '>
      <div className='MainPage-text'>
        <Link to='/Register'>
          <button>הירשם</button>
        </Link>
      </div>
      <div className='MainPage-text'>
        <Link to='/Login'>
          <button>התחבר</button>
        </Link>
      </div>
    </div>
  </Fragment>
);

export default OpeningPage;
