import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Appointment() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });


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


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      productid: product.id, 
      company: product.company, 
      ...formData 
    };

    try {
      const response = await axios.post('http://localhost:3001/reports/create', appointmentData);
      alert('Appointment booked successfully');
      navigate('/products'); 
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book the appointment');
    }
  };


  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Message Box */}
          <div className="mb-5">
            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
              Message (Optional)
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>


          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment
            </button>
          </div>


          <div className="mt-4">
            <button
              type="button"
              onClick={handleBack}
              className="w-full rounded-md bg-gray-500 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-gray-600"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}