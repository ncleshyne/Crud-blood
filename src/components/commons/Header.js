import Radium from 'radium';
import color from 'color';
import React from 'react';
import { Link } from 'react-router'

const styles = {
  base: {
    color: 'gray'
  },
  header: {
    fontSize: 26,
    // color: '#fff',
  }

}
//@Radium
const Header = (props) => (
  <header className="header"
    style={[
      styles.base,
      styles.header
    ]}>

    <h1>Blood Donation App</h1>
    <hr/>

    <Link to='/' className='btn btn-primary'>Home</Link>
    <Link to='about' className='btn btn-primary'>About</Link>
    <Link to='requests' className='btn btn-primary'>Donate</Link>
    <Link to='/request' className='btn btn-primary'>Request</Link>
  </header>
);


export default Radium(Header);
