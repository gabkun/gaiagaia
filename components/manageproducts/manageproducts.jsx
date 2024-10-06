import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState({
        id: '',
        product: '',
        brand: '',
        model: '',
        price: ''
    });
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/products/getproducts')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:3001/products/deleteproduct/${productId}`)
            .then(res => {
                if (res.status === 200) {

                    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
                } else {
                    console.error('Failed to delete product');
                }
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (product) => {
        setEditedProduct(product);
        setShowEditForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        axios.put(`http://localhost:3001/products/updateproduct/${editedProduct.id}`, editedProduct)
            .then(res => {
                if (res.status === 200) {

                    axios.get('http://localhost:3001/products/getproducts')
                        .then(res => setProducts(res.data))
                        .catch(err => console.log(err));
                    setShowEditForm(false);
                    setEditedProduct({
                        id: '',
                        product: '',
                        brand: '',
                        model: '',
                        price: ''
                    });
                } else {
                    console.error('Failed to update product');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex h-screen bg-primary justify-center items-center m-8">
            <div className="w-3/4 bg-white rounded p-6">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
                    <a href='/addproducts'> Add +</a>
                </button>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Brand</th>
                            <th className="px-4 py-2">Model</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="border px-4 py-2">{data.product}</td>
                                <td className="border px-4 py-2">{data.brand}</td>
                                <td className="border px-4 py-2">{data.model}</td>
                                <td className="border px-4 py-2">{data.price}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleEdit(data)}>
                                        Update
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(data.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showEditForm && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Edit Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                                <input type="text" name="product" value={editedProduct.product} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                                <input type="text" name="brand" value={editedProduct.brand} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Model</label>
                                <input type="text" name="model" value={editedProduct.model} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                <input type="text" name="price" value={editedProduct.price} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Update
                                </button>
                                <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setShowEditForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageProducts;