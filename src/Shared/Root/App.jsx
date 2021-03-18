import React, { Component } from 'react';
import Home from '../Home/Home';

class app extends Component {
  componentDidMount () {
    console.log('[App.jsx] componentDidMount');
  }
  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    )
  }
}

export default app;
