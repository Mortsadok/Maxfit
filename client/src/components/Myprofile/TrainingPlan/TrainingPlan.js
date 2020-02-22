import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../css/Myprofile.css';
import { ButtonGroup, Button, Form, Card } from 'react-bootstrap';
import { CustomInput } from 'reactstrap';
import SecNav from '../SecNav';
import Navbar from '../../Navbar/Navbar';
import Alert from '../../Layout/Alert';
import MediaQuery from 'react-responsive';
// Redux
import { setTrainingPlan } from '../../../actions/trainingAction';
import { connect } from 'react-redux';
import MobileNav from '../../Mobile/MobileNav';

const TrainingPlan = ({ user, setTrainingPlan }) => {
  const { Name, email } = user;
  let name = [];
  const onChange = id => {
    setTrainingData(
      trainingData.map(type => {
        if (type.id === id && type.selected === false) {
          setTypeName(type.trainingType);
          return { ...type, selected: true };
        }
        return { ...type, selected: false };
      })
    );
  };
  const onSubmit = e => {
    e.preventDefault();
    setTrainingPlan(typeName, buttonValue, email);
  };
  const [typeName, setTypeName] = useState(null);
  const [buttonValue, setButtonValue] = useState(null);
  const buttonGroup = [
    'שבת',
    'שישי',
    'חמישי',
    'רביעי',
    'שלישי',
    'שני',
    'ראשון'
  ];
  const [trainingData, setTrainingData] = useState([
    {
      trainingType: 'מסת  שריר',
      id: 1,
      selected: false,
      TrainingData:
        ' שיטת אימון המותאמת לפיתוח כוחם וגודלם של השרירים. כאשר הוא נערך בצורה נכונה, אימון משקולות יכול להביא לשיפור הבריאות ולהרגשה טובה.'
    },
    {
      trainingType: 'עיצוב וחיטוב',
      id: 2,
      selected: false,
      TrainingData:
        'מטרת פיתוח הגוף היא להציג את מסת השרירים, גודלם וחיטובם, באופן האומנותי, הסימטרי והאסתטי ככל האפשר.'
    },
    {
      trainingType: 'אירובי',
      id: 3,
      selected: false,
      TrainingData:
        ' מאמץ גופני תת-מרבי המפעיל קבוצות שרירים גדולות לזמן ממושך, כגון: הליכה, ריצה, רכיבה על אופניים, שחייה, סקי, זומבה ועוד.'
    },
    {
      trainingType: 'אימון פונקציונאלי',
      id: 4,
      selected: false,
      TrainingData:
        '  אימון פונקציונלי מאפשר לאמן את הגוף לא כמכלול של שרירים מבודדים,  אלא כמערכת שלמה המסוגלת לבצע באופן איכותי את הפעולות הכי מגוונות.'
    }
  ]);
  if (Name !== undefined) {
    name = Name.split(' ');
  }
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <SecNav />
        <MobileTraining
          Name={name[0]}
          onChange={onChange}
          buttonGroup={buttonGroup}
          trainingData={trainingData}
          setButtonValue={setButtonValue}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className='TrainingPlan'>
          <Navbar />
          <SecNav />
          <UnderNAV
            Name={name[0]}
            onChange={onChange}
            buttonGroup={buttonGroup}
            trainingData={trainingData}
            setButtonValue={setButtonValue}
            onSubmit={onSubmit}
          />
        </div>
      </MediaQuery>
    </Fragment>
  );
};
const UnderNAV = ({
  Name,
  onChange,
  buttonGroup,
  trainingData,
  setButtonValue,
  onSubmit
}) => (
  <div className='underNAV'>
    <div className='Inside-box'>
      <div className='Headline'>
        <p className='font-weight-light'>תוכנית אימונים</p>
      </div>
      <div className='userMSG'>
        {`שלום ${Name}, בחר בבקשה את תוכנית האימונים הרצויה:`}
      </div>
      <div className='Train-content'>
        {trainingData.map((data, index) => (
          <Card border='secondary' key={index} style={{ width: '19rem' }}>
            <Card.Header>
              <CustomInput
                id={data.id}
                type='radio'
                onChange={() => onChange(data.id)}
                checked={data.selected}
              />
              {data.trainingType}
            </Card.Header>
            <Card.Body>
              <Card.Text>{data.TrainingData}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className='userMSG'>בחר בבקשה באיזה ימים תרצה להתאמן:</div>
      <div className='DaysTrain'>
        <ButtonGroup className='mr-2' aria-label='First group'>
          {buttonGroup.map((button, index) => (
            <Fragment key={index}>
              <Button
                onClick={() => setButtonValue(button)}
                variant='secondary'
                selected={true}
              >
                {button}
              </Button>
            </Fragment>
          ))}
        </ButtonGroup>
      </div>
      <div className='sendBtn'>
        <div className='btnsnd'>
          <Form onSubmit={e => onSubmit(e)}>
            <Button variant='outline-dark' type='submit'>
              בקש תוכנית אימונים
            </Button>
          </Form>
          <Alert />
        </div>
      </div>
    </div>
  </div>
);
const MobileTraining = ({
  Name,
  onSubmit,
  trainingData,
  onChange,
  buttonGroup,
  setButtonValue
}) => (
  <div className='Mobile'>
    <div className='training'>
      <main className='main'>
        <UnderNAV
          Name={Name}
          onChange={onChange}
          buttonGroup={buttonGroup}
          trainingData={trainingData}
          setButtonValue={setButtonValue}
          onSubmit={onSubmit}
        />
      </main>
    </div>
  </div>
);
TrainingPlan.propTypes = {
  user: PropTypes.object,
  setTrainingPlan: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, { setTrainingPlan })(TrainingPlan);
