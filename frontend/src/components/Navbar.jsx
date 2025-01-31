import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
import Button from "./Button";
import wellnest_logo from "/wellnest_logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0(); // Use Auth0 hook

  let Links = [
    { name: "HOME", link: "/loggedin/home" },
    { name: "PROFILE", link: "/loggedin/profile" }, // Link to the profile page
    { name: "CONTACT US", link: "/loggedin/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <img src={wellnest_logo} alt="logo" className="w-[12vw]" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </Link>
            </li>
          ))}

          {/* Show user profile if authenticated */}
          {isAuthenticated && (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <img
                src={user.picture}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
            </li>
          )}

          {/* Show login or logout button based on authentication status */}
          {isAuthenticated ? (
            <button
              className="bg-[#29b5f6d5] w-[8vw] mx-6 py-2 text-xl rounded-lg"
              onClick={() => {
                console.log("Logout button clicked"); // Debugging Log
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              Logout
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;