import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components//Home/Home";
import Live from "./components/Live/Live";
import Notifications from "./components/Notifications/Notifications";
import Store from "./components/Store/Store";
import "./css/Main.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Myprofile from "./components/Myprofile/Myprofile";

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
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
