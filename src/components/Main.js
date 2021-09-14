import React from 'react';
import brand from '../images/brand.png'
import './styles/Main.css'
import {Link} from 'react-router-dom'

function Main(props) {

  return (
      <header className="header">
        <nav className="navbar navbar-dark border border-secondary">
            <div className="container-fluid">
                
            <button className="btn-cyan text-white btn ">Buy Now</button>
                <Link className="navbar-brand" to="/react-diary">
                    <img src={brand} alt="brand-logo" height="75"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/react-diary">Home</Link>
                    <Link className="nav-link"  to="/react-diary">Features</Link>
                    <Link className="nav-link"  to="/react-diary">Pricing</Link>
                    <Link className="nav-link disabled" to="/react-diary" tabIndex="-1" aria-disabled="true">Disabled</Link>
                </div>
                </div>
            </div>
        </nav>
      </header>
      
  );
}

export default Main;

