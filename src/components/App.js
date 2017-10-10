import React from 'react';
import Header from './commons/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}

export default App;
