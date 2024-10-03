// import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/online-shop.png'; // Pastikan jalur gambar benar

function TokoOnlineShopSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container pl-14 mx-auto px-5 text-white">
        <h2 className="text-7xl font-bold mt-36">Belanja Buku Online</h2>
        <h2 className="text-4xl font-bold mb-8 pb-1">Temukan Berbagai Buku Berkualitas</h2>
        <p className="mb-8">
          Kami menyediakan berbagai pilihan buku yang dapat Anda beli secara online. Mulai dari buku pelajaran, novel, hingga buku referensi akademik tersedia di toko kami. Jangan lewatkan kesempatan untuk memiliki buku berkualitas dengan harga terbaik.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          <Link to='#' className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Kunjungi Toko Online Kami
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TokoOnlineShopSection;
