// VisiMisi.js
import React from 'react';

function VisiMisi() {
  return (
    <div className="flex justify-center mt-10 mb-7">
      <div className="max-w-lg bg-gradient-to-r from-blue-400 to-blue-600 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 bg-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visi Gita Kasih Publisher</h2>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            Menjadi penerbit terpercaya di Indonesia yang berkomitmen dalam mendukung penulis lokal untuk menciptakan karya-karya yang berdaya guna dan bermanfaat bagi masyarakat.
          </p>

          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Misi Gita Kasih Publisher</h2>
          <ol className="list-decimal ml-5 text-gray-700 dark:text-gray-400">
            <li className="mb-2">Memberikan pelayanan terbaik dalam proses penerbitan karya tulis yang berkualitas dan resmi;</li>
            <li className="mb-2">Mendukung penulis dalam setiap tahap penerbitan, mulai dari penyusunan hingga distribusi karya secara luas;</li>
            <li className="mb-2">Menghadirkan buku-buku inspiratif yang memberikan dampak positif kepada pembaca dan masyarakat umum.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
