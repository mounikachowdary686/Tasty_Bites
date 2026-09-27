import { useState } from "react";
import { supabase } from "../supabase";

function Order() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
 const [dish, setDish] = useState("");
const [branch, setBranch] = useState("");
async function handleOrder() {
  if (!name || !quantity || !dish || !branch) {
    alert("Please fill all the details");
    return;
  }
 
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        name: name,
        quantity: Number(quantity),
        dish: dish,
        branch: branch,
      },
    ]);
 
  if (error) {
    console.error(error);
    alert("Order failed");
    return;
  }
 
  alert("Order placed successfully!");
}


  return (
    <main className="order-page">
      <h1>Order Your Food</h1>
      <div className="order-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
 
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
        />
        <label htmlFor="dish">Select Dish</label>
<select
  id="dish"
  value={dish}
  onChange={(e) => setDish(e.target.value)}
>
  <option value="">-- Select Dish --</option>
  <option value="Paneer Butter Masala">Paneer Butter Masala</option>
  <option value="Veg Biryani">Veg Biryani</option>
  <option value="Butter Naan">Butter Naan</option>
</select>
 
<label htmlFor="branch">Select Branch</label>
<select
  id="branch"
  value={branch}
  onChange={(e) => setBranch(e.target.value)}
>
  <option value="">-- Select Branch --</option>
  <option value="Yelahanka Branch">Yelahanka Branch</option>
  <option value="Indiranagar Branch">Indiranagar Branch</option>
</select>
<button onClick={handleOrder}>
  Place Order
</button>

      </div>
 
      <section className="order-details">
        <h3>Order Details</h3>
        <p>Name: <strong>{name || "-"}</strong></p>
        <p>Quantity: <strong>{quantity || "-"}</strong></p>
        <p>Dish: <strong>{dish || "-"}</strong></p>
        <p>Branch: <strong>{branch || "-"}</strong></p>
      </section>
    </main>
  );
}
 
export default Order;
