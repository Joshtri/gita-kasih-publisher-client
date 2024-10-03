import { Link } from "react-router-dom"

// import React from 'react'


function HomeSection() {
  return (
    <section id="home" className="relative py-16 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white animate-gradient-x">
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8 pb-16 pt-12">
      {/* Introduction */}
      <div className="text-center mb-10 mt-3">
        <h1 className="text-3xl font-bold mb-4">Yayasan Sirih Pinang Kebaikan</h1>
        <p className="text-xl p-3">
          Selamat datang di Yayasan Sirih Pinang Kebaikan. Kami berkomitmen untuk membantu penulis dan penerbit dalam proses penerbitan buku serta pembuatan ISBN yang resmi.
          Bersama kami, karya Anda akan terwujud dan tersebar luas untuk membawa kebaikan dan pengetahuan bagi semua.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <Link to='/daftar-penulis-buku' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Daftar Sekarang
        </Link>
      </div>
    </div>
  </section>
  )
}

export default HomeSection