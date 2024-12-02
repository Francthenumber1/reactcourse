import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-600 border-b border-yellow-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <NavLink
  to="/bookings"
  className={({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  }
>
  Buchungen
</NavLink> */}

            {/*<!-- Logo -->*/}
            <NavLink className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                className="h-10 w-auto"
                src="images/logo.png"
                alt="Das Ubunye-Logo"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Ubunye</span
              >
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Startseite</NavLink
                >
                <NavLink
                  to="/login"
                  className={linkClass}
                  >Anmelden</NavLink
                >
                <NavLink
                  to="/Register"
                  className={linkClass}
                  >Registrieren</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
