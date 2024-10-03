import { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="fixed w-full top-0 z-50">
      <Navbar fluid={true} rounded={true} className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800">
        {/* Logo with Brand Name */}
        <Navbar.Brand href="/">
          <span className="text-2xl font-bold p-2 text-white">Gita Kasih Publisher</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle onClick={toggleNavbar} />

        {/* Navbar Links */}
        <Navbar.Collapse className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded">Home</Link>
          <Link to="/about" className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded">About</Link>
          <Link to="/sejarah" className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded">Sejarah</Link>
          <Link to="/visi-misi" className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded">Visi Misi</Link>

          {/* Service Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded flex items-center"
            >
              Service
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link
                    to="/daftar-penulis-buku"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Daftar Menerbitkan Buku
                  </Link>
                  <Link
                    to="/cek-progress"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Cek Progres Buku
                  </Link>

                  <Link
                    to="/toko-online-buku"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Toko Online Buku
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/contact" className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
