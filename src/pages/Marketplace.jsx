import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Marketplace.css";

function Marketplace() {

const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");

const filteredProducts=products.filter((item)=>{

const matchSearch=item.title
.toLowerCase()
.includes(search.toLowerCase());

const matchCategory=
category==="All" || item.category===category;

return matchSearch && matchCategory;

});

return(

<div className="marketplace">

<h1>Marketplace</h1>

<div className="filters">

<input

type="text"

placeholder="Search Product"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>

<option>All</option>

<option>Electronics</option>

<option>Furniture</option>

<option>Fashion</option>

</select>

</div>

<div className="product-grid">

{

filteredProducts.map((product)=>

<ProductCard

key={product.id}

product={product}

/>

)

}

</div>

</div>

)

}

export default Marketplace;