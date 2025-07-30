import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// No QR code library import needed now!
// import QRCode from 'react-qr-code'; // Remove this line if you haven't already

const Footer = () => {
  // Directly reference the image from the public folder
  // Make sure the filename matches your actual QR code image (e.g., /qr.png, /my-login-qr.jpg)
  const qrCodeImagePath = "/qr.png"; // <--- UPDATE THIS LINE WITH YOUR ACTUAL FILENAME

  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-6">
          <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Nipun</h3>
            <p className="text-gray-400">
              UI/UX Design Intern passionate about creating intuitive user experiences,
              specializing in user research, wireframing, and visual design principles.
            </p>
          </div>

          {/* QR Code section using your local image file */}
          <div className="flex-1 w-full text-center md:text-right md:pr-4">
            <h4 className="text-xl font-semibold mb-4">Scan to Access Mobile Features</h4>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={qrCodeImagePath} // Use the path to your local image
                  alt="QR Code for Mobile Login"
                  width="128" // Set desired width
                  height="128" // Set desired height
                  className="block mx-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              (Ensure your device is on the same local network)
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row
          justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Nipun. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            {/* Social Media Icons */}
            <a
              href="https://www.linkedin.com/in/nipun-warnakulasooriya-54110334b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nipunchamara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </div>
          {/* <div className="flex space-x-4 text-center md:text-right">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;