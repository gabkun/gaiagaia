import React from 'react'
import Nav from '../nav/nav'
import SignUp from '../signup/signup'

export default function Pricing() {
  return (
    <>
    <Nav/>
    <section className="flex-1 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 sm:text-4xl">GAIAS TECH Subscription Plans</h2>
            <p className="text-lg text-gray-500 mt-4">Choose the best plan that suits your business needs</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Free Plan */}
            <div
              className={`relative flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-transform hover:scale-105 ${
                'Free Plan' ? '' : 'border'
              }`}
            >
              <h3 className="text-2xl font-semibold">Free Plan</h3>
              <p className="text-5xl font-bold mt-4">PHP 0</p>
              <p className="text-sm text-gray-600">/ month</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  3 Machine Products / Equipment Rentals
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized Dashboard
                </li>
                <li className="flex items-center">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="#c70000 " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                  </svg>
                  Access / Data Analysis
                </li>
              </ul>
              
              { 'Free Plan' ? (
                <a href="/signup"
             
                  className="mt-8 w-full text-center py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Subscribe Now
                </a>
              ) : (
                <a
     
                  className="mt-8 w-full text-center py-3 px-4 text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Start Now
                </a>
              )}
            </div>

            {/* Silver Plan */}
            <div
              className={`relative flex flex-col items-center p-8 bg-slate-200 rounded-lg shadow-lg transition-transform hover:scale-105 ${
                 'Silver Plan' ? '' : 'border'
              }`}
            >
              <h3 className="text-2xl font-semibold">Silver Plan</h3>
              <p className="text-5xl font-bold mt-4">PHP 199</p>
              <p className="text-sm text-gray-600">/ month</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-black-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  7 Machine Products / Equipment Rentals
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-black-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Semi-Customized Dashboard
                </li>
                <li className="flex items-center">
                <svg class="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#c70000 " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
              </svg>
                  Access / Data Analysis
                </li>
              </ul>

              { 'Silver Plan' ? (
                
                <a href="/signup"
                 
                  className="mt-8 w-full text-center py-3 px-4 text-white bg-slate-600 rounded-md hover:bg-slate-500"
                >
                Subscribe Now
                </a>
              ) : (
                <a
                
                  className="mt-8 w-full text-center py-3 px-4 text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Start Now
                </a>
              )}
            </div>

            {/* Gold Plan */}
            <div
              className={`relative flex flex-col items-center p-8 bg-amber-300 rounded-lg shadow-lg transition-transform hover:scale-105 ${
                 'Gold Plan' ? '' : 'border'
              }`}
            >
              <h3 className="text-2xl font-semibold">Gold Plan</h3>
              <p className="text-5xl font-bold mt-4">PHP 299</p>
              <p className="text-sm text-gray-600">/ month</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-black-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Machine Products / Equipment Rentals
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-black-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Customized Dashboard
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-black-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Access / Data Analysis
                </li>
              </ul>

              {'Gold Plan' ? (
                <a href="/signup"
                 
                  className="mt-8 w-full text-center py-3 px-4 text-white bg-black rounded-md hover:bg-slate-900"
                >
                  Subscribe Now
                </a>
              ) : (
                <a
             
                  className="mt-8 w-full text-center py-3 px-4 text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Start Now
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
