// import React from 'react';
import { Card } from 'flowbite-react';
import CardPoint from './CardPoint';
// import { Link } from 'react-router-dom';

function ServicesHome() {
  return (
    <div className="bg-gray-100 py-8 pt-10">
      <div className="container mx-auto px-2">
        {/* Top Card with Gradient Background */}
        <Card className="w-full max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          {/* Centering the title only */}
          <h2 className="text-center text-xl font-bold mb-3">Gita Kasih Publisher</h2>
          
          {/* Left-aligned paragraph text */}
          <p className="mb-3">
          Anda berasal dari luar Kupang dan ingin menerbitkan buku atau bekerja sama dengan kami? Kini, Gita Kasih Publisher
            <span className="text-orange-300 font-semibold"> menyediakan layanan penerbitan buku dan siap membantu Anda!</span>
          </p>
          <p className="mb-5">
          Daftarkan diri Anda di Gita Kasih Publisher agar kami bisa lebih cepat memenuhi kebutuhan penerbitan Anda.
          </p>
          
          {/* Button centered */}
          <div className="text-center">
            <a href='/'>
              <button  className="bg-white hover:bg-gray-300 text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md w-1/2 transition-all duration-300 ease-in-out">
              Gita Kasih Publisher
              </button>
            </a>
          </div>
        </Card>

        <CardPoint/>
      </div>
    </div>
  );
}

export default ServicesHome;
