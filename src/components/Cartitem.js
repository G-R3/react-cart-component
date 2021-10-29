import React, { Component } from 'react';
import '../styles/Cartitem.css';

class Cartitem extends Component {
  render() {
    const { index, name, price, qty, incrementQty, decrementQty } = this.props;
    return (
      <div className="Cartitem">
        <h3 className="Cartitem-name">{name}</h3>
        <div className="Cartitem-options">
          <button
            className="Cartitem-decrement"
            type="button"
            onClick={() => decrementQty(index)}
            disabled={qty <= 1}
          >
            -
          </button>
          <p className="Cartitem-qty">{qty}</p>
          <button
            className="Cartitem-increment"
            type="button"
            onClick={() => incrementQty(index)}
          >
            +
          </button>
        </div>
        <p className="Cartitem-price">${(price * qty).toFixed(2)}</p>
      </div>
    );
  }
}

export default Cartitem;
