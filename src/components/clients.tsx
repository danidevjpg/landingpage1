/**
 * Clients Component
 * 
 * This component displays a section showcasing the company's clients.
 * - Includes a title and a subtitle.
 * - Displays client logos in a responsive grid layout.
 * - Logos are clickable and styled with hover effects.
 * 
 * Improvements:
 * - Added meaningful `alt` attributes for images to improve accessibility.
 * - Made the layout responsive using Tailwind's grid classes.
 * - Added hover effects for better interactivity.
 */

// icons 
import { HiOutlineUserGroup } from "react-icons/hi"; // card 1 group image 
import { BsBuildings } from "react-icons/bs"; // card 2 group image
import { LuHandshake } from "react-icons/lu"; // card 3 group image
function Clients() {
    return (
      <div className="px-4 lg:px-16 ">
        {/* Title Section */}
        <div className="my-12">
          <h2 className="font-primary text-secondary text-center font-semibold text-4xl">
            Our Clients
          </h2>
          <p className="text-center mt-2 font-primary text-secondary/50">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
  
        {/* Client Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          <img
            src="CompanyLogo1.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 1"
          />
          <img
            src="CompanyLogo2.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 2"
          />
          <img
            src="CompanyLogo5.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 3"
          />
          <img
            src="CompanyLogo4.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 4"
          />
          <img
            src="CompanyLogo5.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 5"
          />
          <img
            src="CompanyLogo6.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 6"
          />
          <img
            src="CompanyLogo7.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 7"
          />
                    <img
            src="CompanyLogo4.svg"
            className="w-16 cursor-pointer hover:scale-110 transition-transform"
            alt="Company Logo 4"
          />
        </div>
      </div>
    );
  }
  
  /**
   * CommunityManage Component
   * 
   * This component highlights the benefits of the product for different types of organizations.
   * - Includes a title and a subtitle.
   * - Displays three cards, each representing a target audience.
   * - Cards are styled with hover effects and responsive layout.
   * 
   * Improvements:
   * - Added meaningful `alt` attributes for images to improve accessibility.
   * - Made the layout responsive using Tailwind's flex and grid classes.
   * - Added hover effects for better interactivity.
   */
  
  function CommunityManage() {
    return (
      <div className="px-4 lg:px-16">
        {/* Title Section */}
        <div className="text-center mt-16">
          <h1 className="font-primary text-secondary font-semibold text-4xl">
            Manage your entire community
            <br />
            in a single system
          </h1>
          <p className="text-secondary/50 mt-3 font-primary">
            Who is Nextcent suitable for?
          </p>
        </div>
  
        {/* Cards Section */}
        <div
          id="cards"
          className="flex justify-around mt-12 flex-col lg:flex-row gap-12 lg:gap-0 items-center"
        >
          {/* Card 1 */}
          <div
            id="card1"
            className="block max-w-sm px-8 py-12 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition dark:text-white"
          >
            <div className="flex justify-center">
              <HiOutlineUserGroup className="h-24 w-24"/>
            </div>
            <h1 className="text-center font-semibold font-primary text-2xl my-3">
              Membership
              <br />
              Organizations
            </h1>
            <p className="text-secondary/50 text-center dark:text-white">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
  
          {/* Card 2 */}
          <div
            id="card2"
            className="block max-w-sm px-8 py-12 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition dark:text-white"
          >
            <div className="flex justify-center">
            <BsBuildings className="h-24 w-24"/>
            </div>
            <h1 className="text-center font-semibold font-primary text-2xl my-3">
              National
              <br />
              Associations
            </h1>
            <p className="text-secondary/50 text-center dark:text-white">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
  
          {/* Card 3 */}
          <div
            id="card3"
            className="block max-w-sm px-8 py-12 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition dark:text-white"
          >
            <div className="flex justify-center">
              <LuHandshake className="h-24 w-24"/>
            </div>
            <h1 className="text-center font-semibold font-primary text-2xl my-3">
              Clubs And
              <br />
              Groups
            </h1>
            <p className="text-secondary/50 text-center dark:text-white">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export { Clients, CommunityManage };