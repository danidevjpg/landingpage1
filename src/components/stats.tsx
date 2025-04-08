import { PiUsersBold } from "react-icons/pi"; //Users Icon
import { FaHandsPraying } from "react-icons/fa6"; //Prayer Hands Icon

function Stats() {
  return (
    <div className="bg-gray-50 font-primary p-12">
      <div className="flex justify-around items-center">
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
    </div>
  );
}
export default Stats;
