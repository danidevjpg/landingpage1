import { useState } from "react";
import { FaHome } from "react-icons/fa"; // Sidebar home icon
import { IoLink } from "react-icons/io5"; // Sidebar link icon
import { FaQuestion } from "react-icons/fa6"; // Sidebar FAQ icon
import { FaSignInAlt } from "react-icons/fa"; // Sidebar sign-in icon

function Sidebar() {
  const [showPopup, setShowPopup] = useState(false); // State to toggle the login popup
  const [showRegister, setShowRegister] = useState(false); // State to toggle the registration popup

  return (
    <div className="sidebar font-primary xl:hidden md:hidden bg-gray-50 dark:bg-gray-800">
      {/* Sidebar Toggle Button */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar Content */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* Navigation Links */}
          <ul className="space-y-2 font-medium">
            {/* Home Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome className="h-6 w-6 text-gray-900 dark:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </a>
            </li>
            {/* Links Dropdown */}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <IoLink className="h-6 w-6 text-gray-900 dark:text-white" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Links
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown Links */}
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </li>
            {/* FAQ Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaQuestion className="h-6 w-6 text-gray-900 dark:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">FAQ</span>
              </a>
            </li>

            {/* Sign In Link */}
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setShowPopup(true)}
              >
                <FaSignInAlt className="h-6 w-6 text-gray-900 dark:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

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
    </div>
  );
}

export { Sidebar };
