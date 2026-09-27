function MenuCard(props) {
  return (
    <div className="menu-card">
      <h2>{props.name}</h2>
      <p>💰 {props.price}</p>
      <p>{props.description}</p>
      <button>Add to Order</button>
    </div>
  );
}
 
function Menu() {
  return (
    <main className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        <MenuCard
          name="Paneer Butter Masala"
          price="₹220"
          description="Creamy tomato based curry with paneer"
        />
        <MenuCard
          name="Veg Biryani"
          price="₹180"
          description="Fragrant rice cooked with mixed vegetables and spices"
        />
        <MenuCard
  name="Butter Naan"
  price="₹40"
  description="Soft tandoor baked bread brushed with butter"
/>

      </div>
    </main>
  );
}
 
export default Menu;
