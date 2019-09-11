import React, { Component } from 'react';

import AdminMenu from './AdminMenu';
import './Events.scss';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div className="events">
        <h1 className="title"> Evènements </h1>
        <AdminMenu></AdminMenu>
      </div>
    )
  }
}


export default Events;