import React from 'react';
import { Link } from 'react-router'

class AboutPage extends React.Component {
  constructor() { // called just before render()
    super();
    this.state = { // it is OK to initialize state in contructor
      txt: 'this is a state modify pls'
    };
  }

  componentDidMount(){ // good place to make service callsto load data and trigger a re-render
    console.info('>>> componentDidMount()');
  }
  componentWillReceiveProps(nextProps) {
    // only called if props changed from outside
    console.info('>>> About: componentWillReceiveProps()');
  }
  componentWillUpdate(nextProps, nextState) {
    // you can't cann this.setState() here!!!
    console.info('>>> About: componentWillUpdate()', nextProps, nextState);
  }

  update(e) {
    this.setState({ txt: e.target.value });
    //
  }

  render() {
    return (
      <div className='aboutPage'>
        This About page!!! - {this.state.txt}
        <Widget update={ this.update.bind(this) }/>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }

}

const Widget = (props) => <div>type here: <input autoFocus type="text" onChange={ props.update } /></div>


export default AboutPage;
