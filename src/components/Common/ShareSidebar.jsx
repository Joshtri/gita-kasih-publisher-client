import  { useState } from 'react';
import { FaWhatsapp, FaPinterest, FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function ShareSidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar on mobile
  const shareUrl = 'https://gita-kasih-publisher.com'; // Replace with your website URL
  const shareText = 'ingin menerbitkan buku anda ? Silahkan mengunjungi Situs Web Gita Kasih Publisher!'; // Replace with your share text

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar - visible on larger screens */}
      <div className={`fixed left-0 top-1/4 z-50 flex flex-col items-center bg-white bg-opacity-25 shadow-lg p-2 rounded-r-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:flex`}>
        {/* Shares Counter */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">0</h2>
          <p className="text-sm text-gray-500">Shares</p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex flex-col space-y-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
            aria-label="Pinterest"
          >
            <FaPinterest size={20} />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300"
            aria-label="Twitter"
          >
            <FaSquareXTwitter  size={20} />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:?subject=${encodeURIComponent('Check this out')}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            className="bg-gray-400 text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-gray-500 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Collapse Arrow for Sidebar */}
        <div className="mt-4 cursor-pointer lg:hidden" onClick={toggleSidebar}>
          <span className="text-gray-500 text-xl hover:text-gray-700">&#8592;</span>
        </div>
      </div>

      {/* Floating button on mobile */}
      <button
        className="lg:hidden fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={toggleSidebar}
      >
        <FaShareAlt size={24} />
      </button>
    </>
  );
}

export default ShareSidebar;
