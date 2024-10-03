import React from 'react';
import { Card } from 'flowbite-react'; // Assuming you're using Flowbite for card components
import aboutImg from '../../assets/gitakasih-about.webp'; // Example image import
// import joinUsImg from '../../assets/ImgCover.jpg';
// import WhatWeDo from './WhatWeDo';
// import Achievements from './Achievements';
// import Pembina from './Pembina';
// import Pengurus from './Pengurus';


function About() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Tentang Gita Kasih Publisher
        </h1>

        {/* Apa itu Gita Kasih Publisher? */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={aboutImg}
              alt="Tentang Gita Kasih Publisher"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-4 text-black">Apa itu Gita Kasih Publisher?</h2>
              <p className="leading-relaxed text-lg text-gray-800">
                Gita Kasih Publisher adalah penerbit yang berdedikasi untuk mendukung penulis lokal dalam menerbitkan karya-karya berkualitas. Kami bertujuan untuk memberikan dampak positif kepada masyarakat melalui buku-buku yang inspiratif dan penuh wawasan.
              </p>
              
              <p className='leading-relaxed text-lg mt-4 text-gray-800'>
              Gita Kasih Publisher berkomitmen untuk memberikan layanan penerbitan yang menyeluruh dan profesional, dari tahap penulisan hingga distribusi. Kami percaya bahwa setiap karya memiliki potensi untuk mengubah dunia.
              </p>
            </div>
          </div>
        </Card>



        {/* Call to Action */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={aboutImg}
              alt="Mari Bergabung Bersama Kami"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6 text-center md:text-left text-black">
              <h2 className="text-3xl font-semibold mb-4 ">Mari Bergabung Bersama Kami!</h2>
              <p className="text-lg mb-6">
                Bergabunglah dengan Gita Kasih Publisher untuk mewujudkan karya tulis Anda dan menebarkan inspirasi ke seluruh penjuru negeri.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg">
                Hubungi Kami
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;
