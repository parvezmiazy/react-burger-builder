import React, { Component } from "react";
import Bux from "../../../hoc/Bux/Bux";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  // this ould be a functional coponent does not have a class
  componentUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key="{igKey}">
            <span style={{ textTransformed: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Bux>
        <h3>Your Order</h3>
        <p>A delecous burger with the following in gredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Bux>
    );
  }
}

export default OrderSummary;
