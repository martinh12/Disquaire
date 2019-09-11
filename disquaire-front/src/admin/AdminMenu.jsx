import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';

import './AdminMenu.scss';

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="admin-menu">
        <h1 className="title"> Menu </h1>
        <ul className="menu">
          <li>  <NavLink to="/AddVinyl">Ajouter un vinyle</NavLink> </li>
          <li>  <NavLink to="/Vinyls">Vinyles</NavLink> </li>
          <li>  <NavLink to="/AddEvent">Ajouter un évènement</NavLink> </li>
          <li>  <NavLink to="/Events">Evènements</NavLink> </li>
          <li>  <NavLink to="/Mail">Messages</NavLink> </li>
        </ul>
        <button> déconnexion </button>
      </div>
    )
  }
}

export default HomeAdmin;
