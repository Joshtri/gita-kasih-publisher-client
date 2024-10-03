import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import img1 from '../../assets/homeImg/library.webp'
import img2 from '../../assets/homeImg/library2.webp'
import img3 from '../../assets/homeImg/library3.webp'
import img4 from '../../assets/homeImg/library4.webp'
// Array of background images
const backgroundImages = [
  `url(${img1})`,
  `url(${img2})`,
  `url(${img3})`,
  `url(${img4})`,
];

function HomeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="home"
      className="relative py-16 text-white animate-gradient-x"
      style={{
        backgroundImage: backgroundImages[currentImageIndex], // Dynamically set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Smooth fade effect
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8 pb-16 pt-12">
        {/* Introduction */}
        <div className="text-center mb-10 mt-3">
          <h1 className="text-3xl font-bold mb-4">Gita Kasih Publisher</h1>
          <p className="text-xl p-3">
            Selamat datang di Gita Kasih Publisher. Kami berdedikasi untuk mendukung penulis dalam menerbitkan karya terbaik mereka dan memperoleh ISBN resmi. Dengan kami, setiap ide akan menjadi nyata, dan buku Anda akan tersebar luas membawa inspirasi dan wawasan kepada banyak orang.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <Link
            to='/daftar-penulis-buku'
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
