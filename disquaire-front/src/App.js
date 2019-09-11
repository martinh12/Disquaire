import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import HomeAdmin from './admin/HomeAdmin';
import Vinyls from './admin/Vinyls';
import Events from './admin/Events';
import AddVinyl from './admin/AddVinyl';
import AddEvent from './admin/AddEvent';
import Mails from './admin/Mails';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={HomeAdmin} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/AddVinyl" component={AddVinyl} />
        <Route path="/Vinyls" component={Vinyls} />
        <Route path="/Events" component={Events} />
        <Route path="/Mail" component={Mails} />
      </Switch>
      <NotificationContainer />
    </div>
  );
}

export default App;
