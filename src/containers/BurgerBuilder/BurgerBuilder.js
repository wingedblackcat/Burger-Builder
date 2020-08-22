// General imports
import React, { Component } from 'react';

// Component imports
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
  
  // The main creation lifecycle method
  render() {
    return (
      <Auxiliary>
        <div>Burger</div>
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;