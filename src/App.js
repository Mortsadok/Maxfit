import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components//Home/Home";
import Live from "./components/Live/Live";
import Notifications from "./components/Notifications/Notifications";
import Store from "./components/Store/Store";
import "./css/Main.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Myprofile from "./components/Myprofile/Myprofile";
import Processing from "./components/Myprofile/Processing/Processing";
import Personaltraining from "./components/Myprofile/PersonalTraining/Personaltraining";
import Subscription from "./components/Myprofile/Subscription/Subscription";
import TrainingPlan from "./components/Myprofile/TrainingPlan/TrainingPlan";
import UserSettings from "./components/Myprofile/UserSettings/UserSettings";
import Health from "./components/Myprofile/Health/Health";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <div className="App">
            <Route path="/Home" component={Home} exact />
            <Route path="/Live" component={Live} />
            <Route path="/Notifications" component={Notifications} />
            <Route path="/Store" component={Store} />
            <Route path="/Myprofile" component={Myprofile} />
            <Route path="/Processing" component={Processing} />
            <Route path="/Personaltraining" component={Personaltraining} />
            <Route path="/Subscription" component={Subscription} />
            <Route path="/TrainingPlan" component={TrainingPlan} />
            <Route path="/UserSettings" component={UserSettings} />
            <Route path="/Health" component={Health} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;