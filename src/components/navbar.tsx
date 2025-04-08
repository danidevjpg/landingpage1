/**
 * Navbar Component
 * 
 * This component serves as the navigation bar for the landing page. It includes:
 * - A responsive navigation menu with links to different sections of the page.
 * - A "Login" button that opens a popup for user authentication.
 * - A "Sign Up" popup for user registration.
 * - Support for light and dark modes using Tailwind CSS classes.
 * 
 * Features:
 * - Responsive design: The navbar is hidden on smaller screens (`md:flex`, `lg:block`).
 * - Popup modals: Includes login and registration forms with smooth transitions.
 * - Accessibility: Includes `alt` attributes for images and semantic HTML structure.
 * 
 * Improvements:
 * - Added meaningful `alt` text for the logo image.
 * - Enhanced button accessibility with clear labels and hover effects.
 * - Used `aria-hidden` for background overlays to improve screen reader experience.
 */

import { useState } from "react";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false); // State to toggle the login popup
  const [showRegister, setShowRegister] = useState(false); // State to toggle the registration popup

  return (
    <>
      {/* Navbar Section */}
      <nav className="hidden font-primary md:flex lg:block bg-gray-50 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center lg:justify-between mx-auto p-4">
          {/* Logo Section */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="Logo.svg"
              className="h-5 md:hidden lg:block"
              alt="Site Logo"
            />
            <p className="text-xl font-bold dark:text-white md:hidden lg:block">
              Nexcent
            </p>
          </a>

          {/* Navigation Links */}
          <div className="w-auto">
            <ul className="font-medium flex items-baseline space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  FAQ
                </a>
              </li>
              {/* Login Button */}
              <li>
                <button
                  className="text-white text-sm bg-primary py-1 px-5 rounded-lg cursor-pointer hover:bg-green-700 transition hover:scale-105"
                  onClick={() => setShowPopup(true)}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-600 bg-opacity-50"
          aria-hidden="true"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-96 relative flex flex-col items-center">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            {/* Login Form */}
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
              Sign In
            </h2>
            <form className="w-full space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all shadow-md hover:shadow-lg"
              >
                Login
              </button>
              <p className="text-sm text-center text-gray-600 dark:text-white mt-4">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setShowPopup(false);
                    setShowRegister(true);
                  }}
                  className="text-green-500 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Registration Popup */}
      {showRegister && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-600 bg-opacity-50"
          aria-hidden="true"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-96 relative flex flex-col items-center">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowRegister(false)}
            >
              ×
            </button>
            {/* Registration Form */}
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white text-gray-800">
              Sign Up
            </h2>
            <form className="w-full space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all shadow-md hover:shadow-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export { Navbar };