import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import witherrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        "https://react-my-burger-1047f-default-rtdb.firebaseio.com/orders.json"
      )
      .then((res) => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch((error) => {
        this.setState({ loading: false });
        //this.setState({ error: true });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
export default witherrorHandler(Orders, axios);
