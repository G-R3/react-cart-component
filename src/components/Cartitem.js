import React, { Component } from 'react';
import '../styles/Cartitem.css';

class Cartitem extends Component {
  render() {
    const { name, price, qty } = this.props;
    return (
      <div className="Cartitem">
        <h3 className="Cartitem-name">{name}</h3>
        <div className="Cartitem-options">
          <button className="Cartitem-decrement" type="button">
            -
          </button>
          <p className="Cartitem-qty">{qty}</p>
          <button className="Cartitem-increment" type="button">
            +
          </button>
        </div>
        <p className="Cartitem-price">${price}</p>
      </div>
    );
  }
}

export default Cartitem;
