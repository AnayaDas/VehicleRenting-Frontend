import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userDispatch } from 'react-redux';
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><h2>Rent Car</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/register"}>Register</Link>
        </li>  
      </ul>
    </div>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-warning" type="submit">Search</button>
    </form>
  </div>
</nav>
        )
    }

}
export default Header;