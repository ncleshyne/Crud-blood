import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AdaptiveHeight from './carousel';

class HomePage extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="homePage container col-md-8 col-md-offset-3">
          <div>
            <h1>Why Should You Donate Blood?</h1>
            <AdaptiveHeight />
            <p className="container-fluid">By giving blood, you are making a small sacrifice that could be the difference between life and death for someone else. 
            Find out if you are eligible to donate blood, as well as what blood types are compatible with yours, and learn more about the donation process below.</p>
          </div>
        </div>
      </div>
    )
  }

}

export default HomePage;
