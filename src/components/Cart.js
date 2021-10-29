import React, { Component } from 'react';
import Cartitem from './Cartitem';
import '../styles/Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      this.state = {
        items: [...items],
      };
    } else {
      this.state = {
        items: [
          {
            id: 1,
            name: 'Skateboard Deck',
            price: 60,
            qty: 1,
          },
          {
            id: 2,
            name: 'Skateboard Trucks',
            price: 24.99,
            qty: 1,
          },
          {
            id: 3,
            name: 'Skateboard Bearings',
            price: 17.95,
            qty: 1,
          },
        ],
      };
    }
  }

  incrementQty = (index) => {
    const { items } = this.state;

    this.setState({
      items: items.map((item, i) => {
        if (index === i) {
          const newItem = item;
          newItem.qty += 1;
          return newItem;
        }
        return item;
      }),
    });

    localStorage.setItem('items', JSON.stringify(items));
  };

  decrementQty = (index) => {
    const { items } = this.state;

    this.setState({
      items: items.map((item, i) => {
        if (index === i) {
          const newItem = item;
          newItem.qty -= 1;
          return newItem;
        }
        return item;
      }),
    });

    localStorage.setItem('items', JSON.stringify(items));
  };

  render() {
    const { items } = this.state;
    return (
      <div className="Cart">
        {items.map((item, index) => {
          const { id, name, price, qty } = item;
          return (
            <Cartitem
              index={index}
              key={id}
              name={name}
              price={price}
              qty={qty}
              decrementQty={this.decrementQty}
              incrementQty={this.incrementQty}
            />
          );
        })}

        <h2 className="Cart-total">
          Total: $
          {items
            .reduce((accum, curr) => accum + curr.price * curr.qty, 0)
            .toFixed(2)}
        </h2>
      </div>
    );
  }
}

export default Cart;
