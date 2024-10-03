// import React from 'react'
// import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/cek-progress.png'; // Make sure to replace this path with your actual image path

function CekProgressPublisher() {
  return (
    <div
    className="relative bg-cover bg-center bg-no-repeat py-20 "
    style={{ backgroundImage: `url(${backgroundImage})` }}
>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>

    {/* Content */}
    <div className="relative container pl-14 mx-auto px-5 pb-20  text-white">
        <h2 className="text-7xl font-bold mt-24 text-center">Cek Progress Buku</h2>
        {/* <h2 className="text-4xl font-bold  mb-8 pb-1">Menerbitkan & Mencetak Buku.</h2> */}
        {/* <p className="mb-8">
        Jika Anda ingin bertanya ataupun mengetahui tentang Penerbit Buku Deepublish lebih lanjut, silakan email ke marketing.deepublish@gmail.com atau cs@deepublish.co.id
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

        </div>
    </div>
</div>
  )
}

export default CekProgressPublisher