import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-6 md:px-12">
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">TravelSphere</h2>
            <p className="text-gray-400 text-sm mb-4">
              Your ultimate travel companion. Discover breathtaking destinations, get expert tips, and start your next adventure with us.
            </p>
            <div className="flex space-x-4">
              <div className="text-xl hover:text-gray-400 cursor-pointer">
                <FaFacebook />
              </div>
              <div className="text-xl hover:text-gray-400 cursor-pointer">
                <FaTwitter />
              </div>
              <div className="text-xl hover:text-gray-400 cursor-pointer">
                <FaInstagram />
              </div>
              <div className="text-xl hover:text-gray-400 cursor-pointer">
                <FaLinkedin />
              </div>
              <div className="text-xl hover:text-gray-400 cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2">
                <div className="cursor-pointer hover:text-gray-300">
                  Home
                </div>
              </li>
              <li className="mb-2">
                <div className="cursor-pointer hover:text-gray-300">
                  Destinations
                </div>
              </li>
              <li className="mb-2">
                <div className="cursor-pointer hover:text-gray-300">
                  Reviews
                </div>
              </li>
              <li className="mb-2">
                <div className="cursor-pointer hover:text-gray-300">
                  About Us
                </div>
              </li>
              <li className="mb-2">
                <div className="cursor-pointer hover:text-gray-300">
                  Contact
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <p className="text-gray-400 text-sm mb-4">We love to hear from you! Feel free to reach out with any questions or inquiries.</p>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2">📍 123 Travel St, Wanderlust City</li>
              <li className="mb-2">📞 +123 456 7890</li>
              <li className="mb-2">📧 info@travelsphere.com</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest travel tips, guides, and offers by subscribing to our newsletter.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white mb-4"
            />
            <button className="w-full py-2 bg-red-500 text-white font-semibold rounded hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TravelSphere. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;