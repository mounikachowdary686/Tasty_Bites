import { useState } from "react";
import { supabase } from "../supabase";
 
function OrderHistory() {
  const [orders, setOrders] = useState([]);
 
  async function getOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*");
 
    if (error) {
      console.error(error);
      alert("Failed to retrieve orders");
      return;
    }
 
    setOrders(data);
  }
 
  return (
    <main className="history-page">
      <h1>Order History</h1>
      <button className="history-button" onClick={getOrders}>
        View Orders
      </button>
      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Dish</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.dish}</td>
                <td>{order.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
 
export default OrderHistory;
