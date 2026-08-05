import { Link } from "react-router-dom";

import "../styles/productcard.css";


function ProductCard({product}){

return(

<div className="card">

<img
src={product.image}
alt={product.title}
/>

<h3>{product.title}</h3>

<p>₹ {product.price}</p>

<p>{product.category}</p>

<Link to={`/product/${product.id}`}>

<button>

View Details

</button>

</Link>

</div>

)

}

export default ProductCard;