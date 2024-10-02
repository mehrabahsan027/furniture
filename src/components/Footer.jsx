import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-50 text-black dark:bg-black dark:text-white pt-20 pb-10 mt-5 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/* logo and details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-3 font-montserrat">
            <Link>FurniNest</Link>
          </h2>
          <p className="w-10/12 font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quisquam?
          </p>
        </div>

        {/* services */}
        <div>
          <h3 className="text-lg font-montserrat text-red-900 font-semibold">
            Services
          </h3>

          <ul className="mt-2 space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-red-950 font-medium font-poppins"
              >
                Email Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-red-950 font-medium font-poppins"
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-red-950 font-medium font-poppins"
              >
                Branding
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-montserrat text-red-900 font-semibold">
            Furniture
          </h3>

          <ul className="mt-2 space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-red-950 font-medium font-poppins"
              >
                Beds
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-red-950 font-medium font-poppins"
              >
                Table
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-red-950 font-medium font-poppins"
              >
                All
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-montserrat text-red-900 font-semibold">
            Follow Us
          </h3>

          <ul className="mt-2 flex  space-x-4">
            <li>
              <Link
                to="/"
                className="hover:text-red-950 text-xl font-medium font-poppins"
              >
               <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-red-950 text-xl font-medium font-poppins"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-red-950 text-xl font-medium font-poppins"
              >
               <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
       
      </div>

      {/* copyright */}

      <div className="border-t container font-poppins  mt-8 sm:pt-8 mx-auto px-4 flex flex-col gap-y-5 items-center sm:flex-row  sm:justify-around text-black dark:text-white ">
        <p className="pt-2 sm:pt-0">Copyright&copy; {new Date().getFullYear()}</p>
        <p className="space-x-5"
        ><span>Terms & Conditions</span>
        <span>Privacy Policy</span></p>

      </div>
    </footer>
  );
}

export default Footer;
