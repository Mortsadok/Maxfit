import React, { Fragment } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Card } from 'react-bootstrap';
import './ProcessGraph.css';
import BackhandStat from './BackhandStat';
import WeightStat from './WeightStat';
import ChestStat from './ChestStat';
import WaistStat from './WaistStat';
import { Link } from 'react-router-dom';

const ProcessGraph = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='ProcessGraphBox'>
        <div className='Inside_ProcessGraphBox'>
          <div className='Headline'>
            <p className='font-weight-light'>סטטיסטיקת מדדים</p>
            <div className='Stat-content'>
              <div className='GraphSize'>
                <Card>
                  <Card.Header>סטטיסטיקת משקל</Card.Header>
                  <WeightStat />
                </Card>
              </div>
              <div className='GraphSize'>
                <Card>
                  <Card.Header>סטטיסטיקת היקף יד</Card.Header>
                  <BackhandStat />
                </Card>
              </div>
              <div className='GraphSize'>
                <Card>
                  <Card.Header>סטטיסטיקת היקף חזה</Card.Header>
                  <ChestStat />
                </Card>
              </div>
              <div className='GraphSize'>
                <Card>
                  <Card.Header>סטטיסטיקת היקף מותניים</Card.Header>
                  <WaistStat />
                </Card>
              </div>
            </div>
            <Link to='/Processing' className='ButtonClick'>
              בחזרה לעמוד מדדים
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessGraph;
