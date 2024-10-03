import React from 'react';
import { Card } from 'flowbite-react';

// Sample images (you can replace these with actual images)
import isbnImg from '../../assets/whatwedo/wedo1.jpg';
import jemaatImg from '../../assets/whatwedo/wedo2.jpg';
import courseImg from '../../assets/whatwedo/wedo3.jpg';

function WhatWeDo() {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Pembuatan ISBN dan Percetakan Buku */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={isbnImg}
          alt="Pembuatan ISBN dan Percetakan Buku"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Pembuatan ISBN dan Percetakan Buku
          </h2>
          <p className="text-gray-800">
            Kami menawarkan layanan penerbitan ISBN serta percetakan buku untuk penulis dan penerbit.
          </p>
        </div>
      </Card>

      {/* Pemberdayaan Jemaat dan Ekonomi Jemaat */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={jemaatImg}
          alt="Pemberdayaan Jemaat dan Ekonomi Jemaat"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Pemberdayaan Jemaat dan Ekonomi Jemaat
          </h2>
          <p className="text-gray-800">
            Kami membantu jemaat dalam pengembangan ekonomi serta pemberdayaan jemaat secara berkelanjutan.
          </p>
        </div>
      </Card>

      {/* Kuliah Umum dan Summer Course */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={courseImg}
          alt="Kuliah Umum dan Summer Course"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Kuliah Umum dan Summer Course</h2>
          <p className="text-gray-800">
            Kami menyelenggarakan kuliah umum dan kursus musim panas untuk menambah wawasan dan pengetahuan.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default WhatWeDo;
