import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleToggle = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleCloseHamburger = () => {
    setHamburgerOpen(false);
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <a
          href="#home"
          className={`text-white ${
            activeSection === "home" ? "isActive" : ""
            
          } `}
          onClick={(e) => {
            e.preventDefault();
            handleCloseHamburger();
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#services"
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseHamburger();
          }}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseHamburger();
          }}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#pricing"
          className={`text-white ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseHamburger();
          }}
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="#testimonials"
          className={`text-white ${
            activeSection === "testimonials" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseHamburger();
          }}
        >
          Testimonials
        </a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed left-0 right-0 top-0">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-white text-lg font-semibold">
          <a href="/">
            <img src="/public/logo.svg" alt="Mindleap Logo" />
          </a>
        </div>

        {/* Navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              hamburgerOpen ? "border border-white" : ""
            }`}
          >
            <HiMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav items */}
      {hamburgerOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 pb-6">
            {navLinks}
            <li className="ml-3">
              <a
                href="#contact"
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseHamburger();
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
