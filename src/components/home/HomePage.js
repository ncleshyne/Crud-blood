import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HomePage extends React.Component {

  render() {
    return (
        <div className="homePage container">
          <div className="jumbotron">
            <h1>Why You Should Donate Blood?</h1>
            <p>By giving blood, you are making a sacrifice that seems small to you but could be the difference between life and death for someone else.</p>                        
          </div>
        </div>

    )
  }

}

export default HomePage;
