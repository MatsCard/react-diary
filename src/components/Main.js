import React from 'react';
import brand from '../images/brand.png'
import './styles/Main.css'

function Main(props) {

  return (
      <header className="header">
        <nav className="navbar navbar-dark border border-secondary">
            <div className="container-fluid">
                
            <button className="btn-cyan text-white btn ">Buy Now</button>
                <a className="navbar-brand" href="#">
                    <img src={brand} alt="brand-logo" height="75"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
      </header>
      
  );
}

export default Main;

