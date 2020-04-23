import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import Officers from "./Pages/Officers.js";
import Fields from "./Pages/Fields.js"
import Rents from "./Pages/Rents.js"
import AddOfficer from "./Pages/AddOfficer.js"
import AddField from "./Pages/AddField.js"
import Profile from "./Pages/Profile/Profile.js"

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/data/officers" component={Officers} />
      <Route path="/data/fields" component={Fields} />
      <Route path="/data/rents" component={Rents} />

      <Route path="/myProfile" component={Profile}/>

      <Route path="/add/officer" component={AddOfficer} />
      <Route path="/add/field" component={AddField} />
    </Switch>
  );
};

export default Main;
