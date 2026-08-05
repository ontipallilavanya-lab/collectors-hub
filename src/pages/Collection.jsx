import "../styles/collection.css";

function Collection({
  wishlist,
  myCollection,
  increaseQuantity,
  decreaseQuantity,
  removeFromCollection
}) {

  const totalPrice = myCollection.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  return (
  <div className="collection-container">

    <h1>My Collection</h1>

    <h2 className="section-title">Wishlist</h2>

    <p>Total Items: {wishlist.length}</p>

    <h2 className="section-title">Collection</h2>

    <p>Total Items: {myCollection.length}</p>

    {myCollection.length === 0 ? (
      <div
  style={{
    textAlign: "center",
    marginTop: "40px",
  }}
>
  <h3>Your Collection is Empty 🛒</h3>

  <p>Add products from the Marketplace.</p>
</div>
    ) : (
      myCollection.map((item) => (
        <div
          className="collection-card"
          key={item.id}
        >
          <div className="collection-info">
            <h3>{item.title}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>
            <div style={{ marginTop: "10px" }}>
  <button onClick={() => decreaseQuantity(item.id)}>
    -
  </button>

  <button
    style={{ marginLeft: "10px" }}
    onClick={() => increaseQuantity(item.id)}
  >
    +
  </button>
  <button
  style={{
    marginLeft: "10px",
    backgroundColor: "crimson",
  }}
  onClick={() => removeFromCollection(item.id)}
>
  Remove
</button>
</div>

            <p>
              Subtotal: ₹{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))
    )}

    <h2 className="total-price">
      Total Price: ₹{totalPrice}
    </h2>

  </div>
);
}

export default Collection;