import React from 'react';

function DescriptionContact() {
  return (
    <section
      className="relative py-16" 
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-200 opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-8">
          <p className="text-xl p-3 text-dark ">
            Jika Anda ingin bertanya ataupun mengetahui lebih lanjut tentang Gita Kasih Publisher, silakan email ke marketing gitakasihpublisher@gmail.com
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Alamat Resmi</h3>
            <p className="text-lg text-center mb-4">Jl. Souverdi</p>
            <a href="mailto:info@gitakasihpublisher.com" className="text-blue-400 hover:underline">Lihat Lokasi</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">No. Handphone</h3>
            <p className="text-lg mb-2">085234665001</p>
            {/* <p className="text-lg mb-2">085253421441</p>
            <p className="text-lg mb-2">087778089663</p> */}
            <a href="#" className="text-blue-400 hover:underline">Call Us</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">E-Mail Resmi</h3>
            <p className="text-lg mb-4 text-center">Untuk informasi lebih lanjut, kontak kami melalui:</p>
            <a href="mailto:gitakasihpublisher@gmail.com" className="text-blue-400 hover:underline">gitakasihpublisher@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionContact;
