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
          quantity: 0,
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
        <div class="itemPage">
          <button onClick={this.calculateSubTotal}>Ready to Checkout</button>
          <div class="displayItems">
            <div class="theItems">
              <div class="item1">
                <div class="name">
                  {this.state.items[0].name}
                </div>
                <button class="styledButton" onClick={()=> this.subQuantity(0)}>-</button>
                <div class="quantity">
                  {quantity}
                </div>
                <button class="styledButton" onClick={()=> this.addQuantity(0)}>+</button>
                <div class="cost">
                  ${this.state.items[0].price}
                </div>
              </div>
              <div class="item2">
                <div class="name">
                  {this.state.items[1].name}
                </div>
                <button class="styledButton" onClick={()=> this.subQuantity(1)}>-</button>
                <div class="quantity">
                  {this.state.items[1].quantity}
                </div>
                <button class="styledButton" onClick={()=> {this.addQuantity(1); this.calculateSubTotal()}}>+</button>
                <div class="cost">
                  ${this.state.items[1].price}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="checkoutPage">
          <div class="orderSummary">
            <h2>Order Summary</h2>
            <div class="subtotalContainer">
              <span class="subtotal">Subtotal: </span>
              <span class="totalItems">({totalItems} items)</span>
              <span class="calculated">${cartSubTotal}</span>
            </div>
            <div class="deliveryContainer">
              <span class="delivery">Delivery</span>
              <span class="free">Free</span>
            </div>
            <div class="estimatedTaxContainer">
              <span class="tax">Estimated tax</span>
              <span class="taxAmount">${calcTax}</span>
            </div>
          </div>
          <div class="totalContainer">
            <span class="total">Total</span>
            <span class="totalCalc">${total}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoppingcart;