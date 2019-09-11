import React, { Component } from 'react';

import AdminMenu from './AdminMenu';
import './Vinyls.scss';

class Vinyls extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div className="vinyls">
        <h1 className="title"> Vinyles </h1>
        <AdminMenu></AdminMenu>
      </div>
    )
  }
}


export default Vinyls;