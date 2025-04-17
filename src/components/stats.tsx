// Importing icons from react-icons library
import { PiUsersBold } from "react-icons/pi"; // Users icon
import { BsSuitClub } from "react-icons/bs"; // Club icon
import { TbHandClick } from "react-icons/tb"; // Click icon
import { CiCreditCard1 } from "react-icons/ci"; // Credit card icon

/**
 * Stats Component
 * This component displays a statistics section with four cards, each showing
 * an icon, a number, and a label. It is styled for both light and dark themes.
 */
function Stats() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 dark:text-white font-primary p-12 flex-col lg:flex lg:flex-row justify-around">
      {/* Header Section */}
      <div className="flex justify-around items-center text-center lg:text-left">
        <div>
          {/* Title Part 1 */}
          <div>
            <h1 className="text-3xl font-semibold">Helping a local </h1>
          </div>
          {/* Title Part 2 */}
          <div>
            <h1 className="text-3xl font-semibold text-primary">
              business reinvent itself
            </h1>
          </div>
          {/* Subtitle */}
          <div>
            <p>We reached here with our hard work and dedication</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div>
        {/* Cards Row 1 (Cards 1 and 2) */}
        <div className="flex gap-6 lg:gap-24 mt-12 lg:mt-0">
          {/* Card 1: Members */}
          <div>
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div>
                <PiUsersBold className="w-10 h-10 text-primary dark:text-white mt-auto mb-auto" />
              </div>
              {/* Text */}
              <div>
                <div className="font-bold text-2xl">2,245,341</div>
                <div>
                  <p className="text-secondary/50 dark:text-white">Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Clubs */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div>
              <BsSuitClub className="w-10 h-10 text-primary dark:text-white mt-auto mb-auto" />
            </div>
            {/* Text */}
            <div>
              <div className="font-bold text-2xl">46,328</div>
              <div>
                <p className="text-secondary/50 dark:text-white">Clubs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Row 2 (Cards 3 and 4) */}
        <div className="mt-6 flex gap-10 lg:gap-23">
          {/* Card 3: Event Bookings */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div>
              <TbHandClick className="w-10 h-10 text-primary dark:text-white mt-auto mb-auto" />
            </div>
            {/* Text */}
            <div>
              <div className="font-bold text-2xl">828,867</div>
              <div>
                <p className="text-secondary/50 dark:text-white">
                  Event Bookings
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Payments */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div>
              <CiCreditCard1 className="w-10 h-10 text-primary dark:text-white mt-auto mb-auto" />
            </div>
            {/* Text */}
            <div>
              <div className="font-bold text-2xl">1,926,436</div>
              <div>
                <p className="text-secondary/50 dark:text-white">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;