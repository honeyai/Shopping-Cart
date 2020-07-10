import React, { Component } from 'react';

class Shoppingcart extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {
          name: "item1",
          price: 7,
          quantity: 0,
        },
        {
          name: "item2",
          price: 4,
          quantity: 3,
        }
      ],
      cartSubTotal: 0,
      tax: 0.04,
      total: 0,
    }
  }
  calculateSubTotal = () => {
    this.setState(
      {
        cartSubTotal: (this.state.items[0].price * this.state.items[0].quantity) + (this.state.items[1].price * this.state.items[1].quantity)
      })}

  addQuantity = (index) => {
    this.setState (
      {
        quantity: this.state.items[index].quantity++
      }
    )
  }  

  subQuantity = (index) => {
    this.setState (
      {
        quantity: this.state.items[index].quantity--
      }
    )
  }    



  render() {
    let {cartSubTotal} = this.state;

    let totalItems = this.state.items[0].quantity + this.state.items[1].quantity;

    let {quantity} = this.state.items[0];

    let calcTax = this.state.tax * cartSubTotal;

    let {total} = this.state;

    total = calcTax + cartSubTotal;
    return (
      <div class="wrapper">
        <div className="itemPage">
          <button onClick={this.calculateSubTotal}>Ready to Checkout</button>
          <div className="displayItems">
            <div className="theItems">
              <div className="item1">
                <div className="name">
                  {this.state.items[0].name}
                </div>
                <button onClick={()=> this.addQuantity(0)}>+</button>
                <div className="quantity">
                  {quantity}
                </div>
                <button onClick={()=> this.subQuantity(0)}>-</button>
                <div className="cost">
                  ${this.state.items[0].price}
                </div>
              </div>
              <div className="item2">
                <div className="name">
                  {this.state.items[1].name}
                </div>
                <button onClick={()=> this.addQuantity(1)}>+</button>
                <div className="quantity">
                  {this.state.items[1].quantity}
                </div>
                <button onClick={()=> this.subQuantity(1)}>-</button>
                <div className="cost">
                  ${this.state.items[1].price}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkoutPage">
          <div className="orderSummary">
            <h2>Order Summary</h2>
            <div class="subtotalContainer">
              <span class="subtotal">Subtotal: </span>
              <span class="totalItems">({totalItems} items)</span>
              <span class="calculated">${cartSubTotal}</span>
            </div>
            <div className="deliveryContainer">
              <span class="delivery">Delivery</span>
              <span class="free">Free</span>
            </div>
            <div className="estimatedTaxContainer">
              <span class="tax">Estimated tax</span>
              <span class="taxAmount">${calcTax}</span>
            </div>
          </div>
          <div className="total">
            <span class="total">Total</span>
            <span class="totalCalc">${total}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoppingcart;