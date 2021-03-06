import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import Live from './components/Live/Live';
import Notifications from './components/Notifications/Notifications';
import Store from './components/Store/Store';
import './css/Main.css';
import './css/Mobile.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Myprofile from './components/Myprofile/Myprofile';
import BuildPlan from './components/Myprofile/BuildPlan/BuildPlan';
import ProcessGraph from './components/Myprofile/ProcessGraph/ProcessGraph';
import Processing from './components/Myprofile/Processing/Processing';
import Subscription from './components/Myprofile/Subscription/Subscription';
import TrainingPlan from './components/Myprofile/TrainingPlan/TrainingPlan';
import UserSettings from './components/Myprofile/UserSettings/UserSettings';
import Health from './components/Myprofile/Health/Health';
import Openingpage from './components/Openingpage/Openingpage';
import Register from './components/Openingpage/Register';
import Login from './components/Openingpage/Login';
import ForgotPass from './components/Openingpage/ForgotPass';
import setAuthToken from './utils/setAuthToken';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { checkUser } from './actions/authActions';
import { getUpdates } from './actions/updateAction';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(checkUser());
    store.dispatch(getUpdates());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' component={Openingpage} exact />
            <Route path='/ForgotPass' component={ForgotPass} />
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
            <Route path='/Home' component={Home} />
            <Route path='/Live' component={Live} />
            <Route path='/Notifications' component={Notifications} />
            <Route path='/Store' component={Store} />
            <Route path='/Myprofile' component={Myprofile} />
            <Route path='/Processing' component={Processing} />
            <Route path='/Subscription' component={Subscription} />
            <Route path='/TrainingPlan' component={TrainingPlan} />
            <Route path='/UserSettings' component={UserSettings} />
            <Route path='/Health' component={Health} />
            <Route path='/BuildPlan' component={BuildPlan} />
            <Route path='/ProcessGraph' component={ProcessGraph} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
