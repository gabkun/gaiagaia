import React, { useState, useEffect } from "react";
import './landing.css';
import Nav from '../nav/nav';
import powertrac from './img/powertrac2.png'; 
import background from './img/landing.png';
import rent from './img/rent.jpg';
import sell from './img/sell.jpg';
import axios from "axios";

export default function Landing() {
  const carouselImages = [
    background,
    sell,
    rent
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade effect
      setFadeTransition(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
        setFadeTransition(false);
      }, 500); // Wait for the fade out transition before changing the image
    }, 5000); 

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/accounts/subscribe', { email });

      // If successful
      if (response.status === 200) {
        setMessage(response.data.message);
        setError(''); // Clear any errors
        setEmail(''); // Clear the email input
      }
    } catch (err) {
      // Handle error
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'Something went wrong.');
      } else {
        setError('Failed to subscribe. Please try again later.');
      }
      setMessage(''); // Clear success message if there's an error
    }
  };

  return (
    <>
      <Nav />

      <div className='w-auto h-screen bg-gray-100'>
        {/* Carousel Section */}
        <div
          className={`image bg-cover bg-neutral-700 bg-center bg-no-repeat h-full w-full flex items-center justify-center transition-opacity duration-1000 ${fadeTransition ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }} // Dynamically set background image
        >
       
          <div className="container mx-auto w-full  text-center ">
            <h1 className="text-6xl mb-4 font-bold text-white ">
              Welcome to <span className='text-green-400 stroke-cyan-500'>GaiasTech</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white">
              Your one-stop platform for Heavy Equipment and Machineries Clients, Buyers, and Sellers.
            </p>
            <div className='flex justify-center items-center'>
              <button className='rounded px-8 lg:px-10 py-3 text-black bg-white hover:bg-green-600 hover:text-white transition-all duration-300'>
                Explore Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        {/* <div className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Companies that Trust TRUCK HUB</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div
                className="h-36 w-72 relative text-white text-3xl flex items-center justify-center rounded-lg shadow-md bg-center"
                style={{ backgroundImage: `url(${powertrac})` }}
              >
              </div>
              <div
                className="h-36 w-72 relative text-white text-3xl flex items-center justify-center rounded-lg shadow-md bg-center"
                style={{ backgroundImage: `url(${powertrac})` }}
              >
              </div>
              <div
                className="h-36 w-72 relative text-white text-3xl flex items-center justify-center rounded-lg shadow-md bg-center"
                style={{ backgroundImage: `url(${powertrac})` }}
              >
              </div>
            </div>
          </div>
        </div> */}

        {/* About Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Gaias Tech</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              GAIAS TECH is a premier platform designed to connect Farmers, Heavy Machinery buyers, and sellers. Whether you are looking to purchase, sell, or manage a heavy machineries or Equipments, GAIAS TECH offers a seamless experience tailored to your needs. Our mission is to revolutionize the agriculture and business industry by providing a trusted and efficient marketplace for all your need requirements.
            </p>
            <div className="flex justify-center items-center">
              <button className="rounded px-8 lg:px-10 py-3 text-white bg-green-600 hover:bg-green-500 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center bg-green-700">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
            Get the latest updates!
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
            Subscribe to our newsletter and stay updated on the latest developments.
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form className="sm:flex" onSubmit={handleSubmit}>
            <input
              className="required rounded-md w-full px-4 py-2 email"
              placeholder="Enter your email"
              required
              type="email"
              aria-required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                className="w-full flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none transition duration-150 ease-in-out"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
          {message && <p className="text-green-500 mt-3">{message}</p>}
          {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
      </div>
    </div>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-8">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <a href="#" className="mx-4 hover:text-blue-500">About Us</a>
              <a href="#" className="mx-4 hover:text-blue-500">Contact</a>
              <a href="#" className="mx-4 hover:text-blue-500">Services</a>
              <a href="/privacy" className="mx-4 hover:text-blue-500">Privacy Policy</a>
            </div>
            <p className="text-sm">&copy; 2024 GAIAS TECH. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
