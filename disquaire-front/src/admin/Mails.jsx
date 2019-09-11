import React, { Component } from 'react';

import AdminMenu from './AdminMenu';
import './Mail.scss';

class Mails extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div className="mails">
        <h1 className="title"> Messages </h1>
        <AdminMenu></AdminMenu>
      </div>
    )
  }
}


export default Mails;