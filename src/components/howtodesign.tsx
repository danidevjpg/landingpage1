/**
 * HowToDesign Component
 * This component displays a section explaining how to design a site footer.
 * It includes an image, a title, a descriptive paragraph, and a button for further action.
 */
import { FaArrowRight } from "react-icons/fa6"; //arrow right icon

function HowToDesign() {
    return (
        <div className="flex justify-around py-12">
            {/* Left Section: Image */}
            <div>
                <img className="w-96 h-96" src="HowToDesingImg.svg" alt="How to Design Illustration" />
            </div>

            {/* Right Section: Text Content */}
            <div className="flex-col">
                {/* Title Section */}
                <div>
                    <h1 className="font-semibold text-3xl mt-6 text-secondary/90">
                        How to design your site footer like<br /> we did
                    </h1>
                </div>

                {/* Description Section */}
                <div className="mt-6">
                    <p className="text-secondary/50">
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br />
                        molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at<br />
                        libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta<br />
                        nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.<br />
                        Integer in nisi eget nulla commodo faucibus efficitur quis massa.<br />
                        Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
                    </p>
                </div>

                {/* Button Section */}
                <div className="mt-6">
                    <button className="bg-primary text-white px-9 rounded cursor-pointer hover:scale-110 transition ease-in-out py-3">Learn More</button>
                </div>
            </div>
        </div>
    );
}

function HowToDesign2(){
    return (
        <div className="flex justify-center gap-16 bg-gray-50 py-12">
            <div>
                <img src="HowToDesignImg2.svg" className="h-96" alt="" />
            </div>
            <div className="flex-col">
                <div>
                    <p className="text-secondary/60 mb-6 mt-2">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br/> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br/> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br/> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br/> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br/> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum<br/> id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                </div>
                <div>
                    <h1 className="text-xl text-primary font-semibold mb-3">Tim Smith</h1>
                </div>
                <div>
                    <p className="text-secondary/60">British Dragon Boat Racing Association</p>
                </div>
                <div className="mt-14 flex gap-12">
                    <div>
                        <img src="CompanyLogo1.svg" alt="" />
                    </div>
                    <div>
                        <img src="CompanyLogo6.svg" alt="" />
                    </div>
                    <div>
                        <img src="CompanyLogo5.svg" alt="" />
                    </div>
                    <div>
                        <img src="CompanyLogo4.svg" alt="" />
                    </div>
                    <div>
                        <img src="CompanyLogo7.svg" alt="" />
                    </div>
                    <div>
                        <img src="CompanyLogo1.svg" alt="" />
                    </div>
                    <div className="flex cursor-pointer">
                        <div><p className="text-primary mt-1">Meet all customers</p></div>
                        <div>
                        <FaArrowRight className="mt-2 ms-2 text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HowToDesign, HowToDesign2 };