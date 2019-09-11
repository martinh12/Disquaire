import React, { Component } from 'react'; 

import AdminMenu from './AdminMenu';
import './HomeAdmin.scss';

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,

    };
  }

  render() {
    return (
      <div className="home-admin">
        <div class="left">
        <AdminMenu></AdminMenu>
        </div>

        <h1>Home</h1>
      </div>
    )
  }
}

export default HomeAdmin;
