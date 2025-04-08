/**
 * LearnMore Component
 * 
 * This component displays a section with an image, a title, a description, and a "Learn More" button.
 * - The layout is responsive and uses Tailwind CSS for styling.
 * - Includes hover effects for the button to enhance interactivity.
 * 
 * Features:
 * - Image section: Displays an image on the left side.
 * - Text section: Includes a title, a description, and a call-to-action button.
 * - Responsive design: Uses flexbox for alignment and spacing.
 * 
 * Improvements:
 * - Added meaningful `alt` text for the image to improve accessibility.
 * - Corrected the typo in the Tailwind class `text-secondery` to `text-secondary`.
 * - Ensured the layout is responsive for different screen sizes.
 */

function LearnMore() {
    return (
      <div className="flex flex-col lg:flex-row justify-around p-8 lg:p-24 font-primary items-center">
        {/* Image Section */}
        <div>
          <img
            src="LearnMoreImg1.svg"
            alt="Illustration representing learning more about Pixelgrade"
            className="w-full max-w-md"
          />
        </div>
  
        {/* Text Section */}
        <div className="flex flex-col gap-6 mt-8 lg:mt-0">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-semibold text-secondary/90">
              The unseen of spending three
              <br /> years at Pixelgrade
            </h1>
          </div>
  
          {/* Description */}
          <div>
            <p className="text-secondary/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              <br /> sit amet justo ipsum. Pellentesque placerat vestibulum lorem sed
              <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
              pretium auctor. Etiam
              <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
              pulvinar odio.
            </p>
          </div>
  
          {/* Call-to-Action Button */}
          <div>
            <button
              className="text-white text-sm bg-primary py-4 px-12 cursor-pointer rounded hover:bg-green-700 transition hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default LearnMore;