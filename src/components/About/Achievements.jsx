import React from 'react';
import { Card } from 'flowbite-react';

// Sample images (you can replace these with actual images)
import pendetaImg from '../../assets/achievement/achieve1.jpg';
import gerejaImg from '../../assets/achievement/achieve2.jpg';
import pemberdayaanImg from '../../assets/achievement/achieve3.jpg';
import wifiImg from '../../assets/achievement/achieve4.jpg';
import materiImg from '../../assets/achievement/achieve5.jpg';

function Achievements() {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Bekerja sama dengan Pendeta dan Penulis */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={pendetaImg}
          alt="Bekerja sama dengan Pendeta dan Penulis"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Bekerja sama dengan Pendeta dan Penulis
          </h2>
          <p className="text-gray-800">
            Kami bekerja sama dengan para pendeta dan penulis untuk menuangkan karya dan pemikiran dalam bentuk tulisan.
          </p>
        </div>
      </Card>

      {/* Bekerja sama dan membantu gereja-gereja di daerah 3T */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={gerejaImg}
          alt="Bekerja sama dan membantu gereja-gereja di daerah 3T"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Bekerja sama dan membantu gereja-gereja di daerah 3T
          </h2>
          <p className="text-gray-800">
            Kami bekerja sama dan membantu gereja-gereja di daerah 3T untuk meningkatkan SDM dan ekonomi jemaat.
          </p>
        </div>
      </Card>

      {/* Pemberdayaan berkelanjutan */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={pemberdayaanImg}
          alt="Pemberdayaan berkelanjutan"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Pemberdayaan Berkelanjutan</h2>
          <p className="text-gray-800">
            Kami memberikan pemberdayaan berkelanjutan, baik dalam bentuk materi maupun bantuan sosial.
          </p>
        </div>
      </Card>

      {/* Menyediakan Wi-Fi Orbit */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={wifiImg}
          alt="Menyediakan Wi-Fi Orbit"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Menyediakan Wi-Fi Orbit</h2>
          <p className="text-gray-800">
            Kami menyediakan Wi-Fi Orbit bagi jemaat yang tinggal di daerah dengan akses jaringan yang sulit.
          </p>
        </div>
      </Card>

      {/* Pemberian materi dari para ahli */}
      <Card className="shadow-lg rounded-lg">
        <img
          src={materiImg}
          alt="Pemberian materi dari para ahli"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Pemberian Materi</h2>
          <p className="text-gray-800">
            Kami memberikan materi dari para ahli di bidangnya masing-masing untuk menambah pengetahuan jemaat.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Achievements;
