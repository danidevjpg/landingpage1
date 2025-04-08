/**
 * Header Component
 * 
 * This component serves as the header section of the landing page. It includes:
 * - A responsive layout with text and an image.
 * - A call-to-action button for user interaction.
 * - Support for light and dark modes using Tailwind CSS classes.
 * 
 * Improvements:
 * - Added accessibility features (alt text for the image and semantic structure).
 * - Fixed typos in Tailwind class names (`text-secondery` -> `text-secondary`).
 * - Enhanced semantic HTML structure by wrapping text content in a <header> tag
 */

function Header() {
    return (
      <div className="bg-gray-50 font-primary dark:bg-gray-800 flex lg:justify-around text-center lg:text-left flex-col-reverse lg:flex-row items-center p-6 lg:p-24">
        {/* Text Content Section */}
        <header>
          {/* Main Headings */}
          <div>
            <h1 className="text-7xl text-secondary/95 dark:text-white font-semibold">
              Lessons and insights
            </h1>
            <h1 className="text-7xl text-primary dark:text-white font-semibold">
              from 8 years
            </h1>
          </div>
  
          {/* Subheading */}
          <p className="text-secondary/50 dark:text-white mt-3">
            Where to grow your business as a photographer: site or social media?
          </p>
  
          {/* Call-to-Action Button */}
          <button
            className="btn cursor-pointer mt-6 bg-primary text-white p-3 px-8 rounded-sm hover:scale-115 transition ease-in-out"
            aria-label="Register for insights"
          >
            Register
          </button>
        </header>
  
        {/* Image Section */}
        <div>
          <img
            src="HeaderImg.svg"
            className="lg:w-84 w-64 mb-6 lg:mb-0"
            alt="Header illustration showing insights and lessons"
          />
        </div>
      </div>
    );
  }
  
  export default Header;