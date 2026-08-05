import { useParams } from "react-router-dom";
import products from "../data/products";

import "../styles/productdetails.css";

function ProductDetails({ addToCollection }){

const {id}=useParams();

const product=products.find(

(item)=>item.id===Number(id)

);

if(!product){

return <h2>Product Not Found</h2>;

}

return(

<div className="details">

<img

src={product.image}

alt={product.title}

/>

<div>

<h1>{product.title}</h1>

<h2>₹ {product.price}</h2>

<h3>{product.category}</h3>

<p>
This premium product is available in Collector's Hub.
It is designed with high quality materials and offers
excellent value for money. Perfect for everyday use.
</p>
<button
  onClick={() => {
    addToCollection(product);
    alert("Product added to your collection!");
  }}
>
  Add To Cart
</button>
</div>

</div>

)

}

export default ProductDetails;