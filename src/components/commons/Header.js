import Radium from 'radium';
import color from 'color';
import React from 'react';
import { Link } from 'react-router';
import styles from './Navbar.css';

//@Radium
const Header = (props) => (
/*<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <Link id="navbar">
    <div className="navbar-collapse collapse navbar">
      <ul className="nav navbar-nav">
        <li><img src={require('./logo2.png')} width="200px" height="60px" /></li>
        <li className="names"><Link to='/'>Home</Link></li>
        <li className="names"><a href="about">About</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="requests" className="names">Donate</a></li>
        <li><a href="/request" className="names">Request</a></li>
      </ul>
    </div>
    </Link>
  </div>
</nav>*/
<div className="main">
<div className="sidebar">
  <div className="logo">
    <a href="/" title="Svbtle Theme">
    <span className="img"></span></a>
    <a href="/" title="Svbtle Theme">
    <h1>Blood Donation App</h1>
    </a>
  </div>
  <div className="description">
  An app made to solve the urgent cases of blood emergencies. Made using React with Redux.
  </div>
  <div className="navigation">
    <a href="/">Home</a>
    <a href="about">About</a>
    <a href="requests">Donate</a>
    <a href="/request">Request</a>
  </div>
</div>
</div>
);


export default Radium(Header);
