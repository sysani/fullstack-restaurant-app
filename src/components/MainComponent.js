import React, { Component } from 'react';

import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
  
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }
    
    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes}
                    getDish={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail 
                    selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />    
            </div>    
        );
    }
}

export default Main;
