import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import Collection from "./pages/Collection";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const [wishlist, setWishlist] = useState([]);

  const [myCollection, setMyCollection] = useState([]);

  const addToCollection = (product) => {
  const existingProduct = myCollection.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    const updatedCollection = myCollection.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setMyCollection(updatedCollection);
  } else {
    setMyCollection([
      ...myCollection,
      { ...product, quantity: 1 },
    ]);
  }
};

 const increaseQuantity = (id) => {
  const updatedCollection = myCollection.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setMyCollection(updatedCollection);
};

const decreaseQuantity = (id) => {
  const updatedCollection = myCollection
    .map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);

  setMyCollection(updatedCollection);
};

const removeFromCollection = (id) => {
  const updatedCollection = myCollection.filter(
    (item) => item.id !== id
  );

  setMyCollection(updatedCollection);
};

  return (
    <>
      <Navbar
        wishlistCount={wishlist.length}
        collectionCount={myCollection.length}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Marketplace
              wishlist={wishlist}
              setWishlist={setWishlist}
              myCollection={myCollection}
              setMyCollection={setMyCollection}
            />
          }
        />

        <Route path="/community" element={<Community />} />

        <Route
          path="/collection"
          element={
            <Collection
  wishlist={wishlist}
  myCollection={myCollection}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  removeFromCollection={removeFromCollection}
/>
          }
        />

       <Route
  path="/product/:id"
  element={
    <ProductDetails
      addToCollection={addToCollection}
    />
  }
/>

      </Routes>

    </>
  );
}

export default App;