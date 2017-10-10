import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HomePage extends React.Component {

  constructor() {
    super();
    const items = [
      {id: '1', name: 'Item 1'},
      {id: '2', name: 'Second item'},
    ];
    this.state = { items };
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const items = [...this.state.items, { id: this.state.items.length + 1 + '', name: new Date() + '' }];
    this.setState({items});
  }
  removeItem(item) {
    const { id } = item;
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({items});
  }


  render() {
    return (
        <div className="homePage container">
          <div className="jumbotron">
            <h1>Why You Should Donate Blood?</h1>
            <p>By giving blood, you are making a sacrifice that seems small to you but could be the difference between life and death for someone else. 
            Find out if you are eligible to donate blood, as well as what blood types are compatible with yours, and learn more about the donation process below.</p>
            

            <h2>Benefits of Donating Blood</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>


            </ul>
            
          </div>
        </div>

    )
  }

}

export default HomePage;
