import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/products/getproducts/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Failed to fetch product details');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
                // <div className="p-4 max-w-4xl mx-auto">
        //     <h1 className="text-3xl font-bold mb-4"></h1>
        //     <div className="flex flex-col lg:flex-row">
        //         <div className="w-full lg:w-1/3">
        //         
        //         </div>
        //         <div className="w-full lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
        //             <p className="text-lg font-semibold mb-2">Description:</p>
        //             
        //             <p className="text-lg font-semibold mt-4">Price: </p>
        //             <p className="text-lg font-semibold mt-4">Category: {product.type}</p>
          
        //         </div>
        //     </div>
        // </div>
<>
        <div class="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <button 
                    className="mb-6 bg-blue-600 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-500"
                    onClick={() => navigate(-1)} // Navigate back to the previous page
                >
                    &larr; Back
                </button>
                </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img src={`http://localhost:3001/products/images/${product.image}`} alt={product.product} className="w-full h-full object-cover" />
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                    <Link to={`/product/${id}/appointment`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                        Book an Appointment
                    </button>
                    </Link>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Reserve for Later</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.brand} </h2>
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.model} </h2>
                <Link to={`/companydashboard/${product.company}`} className="block">
                <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 cursor-pointer hover:underline">
                    {product.company}
                </h2>
            </Link>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">
                            PHP{Number(product.price).toLocaleString('en-US')}
                            </span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Category:</span>
                    <p className="text-lg font-semibold mt-4">{product.type}</p>
                </div>
               
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p>{product.notes}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</>

    );
};

export default ProductPage;