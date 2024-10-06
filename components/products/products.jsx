import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from '../nav/nav';

export default function Products() {
  
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3001/products/getproducts")
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.product.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
    <Nav />
    <div className="h-screen bg-gray-400">
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-500 rounded-md"
        />
      </div>
      <div className="h-96 w-full bg-gray-500 flex items-center justify-around mt-4 overflow-auto">
  {filteredProducts.map((product, index) => (
    <div key={index} className="h-80 w-64 bg-gray-900 text-white text-xl flex flex-col justify-between p-4 rounded-lg shadow-lg">
      <div className="h-48 w-full mb-4 overflow-hidden rounded-md">
        <img src={`http://localhost:3001/products/images/${product.image}`} alt={product.product} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-start space-y-2">
        <p className="font-bold text-lg">Name: {product.product}</p>
        <p className="text-sm text-gray-400">Brand: {product.brand}</p>
        <p className="text-sm text-gray-400">Model: {product.model}</p>
        <p className="text-lg font-semibold text-yellow-400">Price: PHP {product.price}</p>
      </div>
    </div>
  ))}
</div>
    </div>
    </>
  );
}

