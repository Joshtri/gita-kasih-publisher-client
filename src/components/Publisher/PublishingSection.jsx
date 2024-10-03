// import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/library1.png'; // Make sure to replace this path with your actual image path

function PublishingSection() {
  return (
    <div
    className="relative bg-cover bg-center bg-no-repeat py-20"
    style={{ backgroundImage: `url(${backgroundImage})` }}
>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative container pl-14 mx-auto px-5  text-white">
        <h2 className="text-7xl font-bold mt-36">Daftar Disini</h2>
        <h2 className="text-4xl font-bold  mb-8 pb-1">Menerbitkan & Mencetak Buku.</h2>
        {/* <p className="mb-8">
        Jika Anda ingin bertanya ataupun mengetahui tentang Penerbit Buku Deepublish lebih lanjut, silakan email ke marketing.deepublish@gmail.com atau cs@deepublish.co.id
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          <Link to='/formulir-daftar' className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Daftar Menerbitkan Buku Sekarang
          </Link>
        </div>
    </div>
</div>
  )
}

export default PublishingSection