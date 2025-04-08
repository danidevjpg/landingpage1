// icons
import { PiUsersBold } from "react-icons/pi"; // users icon
import { BsSuitClub } from "react-icons/bs"; // club icon
import { TbHandClick } from "react-icons/tb"; // click icon
import { CiCreditCard1 } from "react-icons/ci"; // credit card icon

function Stats() {
  return (
    <div className="bg-gray-50  dark:bg-gray-800 dark:text-white font-primary p-12 flex-col lg:flex lg:flex-row justify-around">
      <div className="flex justify-around items-center text-center lg:text-left">
        <div>
          <div>
            <h1 className="text-3xl font-semibold">Helping a local </h1>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-primary">
              business reinvent itself
            </h1>
          </div>
          <div>
            <p>We reached here with our hard work and dedication</p>
          </div>
        </div>
      </div>
      {/* stats */}
      <div>
        {/* cards 1+2 */}
        <div className="flex gap-6 lg:gap-24 mt-12 lg:mt-0 ">
          {/* card 1 */}
          <div>
            <div className="flex items-center gap-3">
              <div>
                <PiUsersBold className="w-10 h-10 text-primary dark:text-white mt-auto   mb-auto" />
              </div>
              <div>
                <div className="font-bold text-2xl">2,245,341</div>
                <div>
                  <p className="text-secondary/50 dark:text-white">
                    Members
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex items-center gap-3">
              <div>
                <BsSuitClub className="w-10 h-10 text-primary dark:text-white mt-auto   mb-auto" />
              </div>
              <div>
                <div className="font-bold text-2xl">46,328</div>
                <div>
                  <p className="text-secondary/50 dark:text-white">
                    Clubs
                  </p>
                </div>
              </div>
            </div>
        </div>
        {/* cards 3+4 */}
        <div className="mt-6 flex gap-10 lg:gap-23">
          {/* card 3  */}
          <div className="flex items-center gap-3">
              <div>
                <TbHandClick className="w-10 h-10 text-primary dark:text-white mt-auto   mb-auto" />
              </div>
              <div>
                <div className="font-bold text-2xl">828,867</div>
                <div>
                  <p className="text-secondary/50 dark:text-white">
                  Event Bookings
                  </p>
                </div>
              </div>
            </div>
          {/* card 4 */}
          <div className="flex items-center gap-3">
              <div>
                <CiCreditCard1 className="w-10 h-10 text-primary dark:text-white mt-auto   mb-auto" />
              </div>
              <div>
                <div className="font-bold text-2xl">1,926,436</div>
                <div>
                  <p className="text-secondary/50 dark:text-white">
                  Payment
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
