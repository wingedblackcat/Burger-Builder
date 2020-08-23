// General imports
import React, { Component } from 'react';

// Component imports
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  // state in a modern way outside the constructor
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  }

  // The main creation lifecycle method
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;