// src/Pengurus.js
import React from 'react';

import bendaharaImg from '../../assets/pengurus/bendahara.jpg';
import sekretarisImg from '../../assets/pengurus/sekretaris.jpg';
import ketuaImg from '../../assets/pengurus/ketua.jpg';
import anggotaImg from '../../assets/pengurus/anggota.png';
import adminImg from '../../assets/pengurus/admin.jpg';

const Pengurus = () => {
  return (
    <div className="p-10">
      <h1 className="text-6xl font-bold text-gray-200 mb-10">Pengurus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Member
          role="Ketua"
          name="Pdt. Dr. Ebenhaizer I. Nuban Timo, M.A."
          description="Lahir di Bimous (Amarasi, NTT), tahun 1965. Meraih gelar doktor teologinya di Theologische Universiteit van de Gereformeerde Kerken in Nederland di Kampen. Pendeta GMIT, dosen UKAW yang mengajar di bidang Sistematika dan merupakan Penulis dari sejumlah buku Teologi."
          imgSrc={ketuaImg}
        />
        <Member
          role="Sekretaris"
          name="Pdt. Dr. Yuda D. Hawu Haba, M.Th"
          description="Lahir pada 2 Februari 1970. Meraih gelar doktornya pada bidang studi Sejarah Gereja di STAKN Kupang pada tahun 2019. Pendeta GMIT, dosen Teologi yang mengajar di Fakultas Teologi UKAW, bidang Sejarah Gereja. Kontributor Artikel pada sejumlah majalah dan koran serta penulis sejumlah buku sejarah dan artikel."
          imgSrc={sekretarisImg}
        />
        <Member
          role="Bendahara"
          name="Maya Djawa, S.Th., M.Pd.K., Ph.D."
          description="Lahir di Waikabubak pada 1 Maret 1983. Meraih gelar doktor teologinya di Jangsin University, Korea Selatan pada tahun 2023. Dosen di IAKN Kupang, dan Penulis sejumlah buku dan artikel."
          imgSrc={bendaharaImg}
        />
        <Member
          role="Anggota"
          name="Daud Alfons Pandie"
          imgSrc={anggotaImg}
        />
        <Member
          role="Admin"
          name="Rumelus Adolf Djada Koroh"
          imgSrc={adminImg}
        />
      </div>
    </div>
  );
};

const Member = ({ role, name, description, imgSrc }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex items-start">
    <img src={imgSrc} alt={`Portrait of ${role}`} className="w-24 h-24 rounded-full mr-4" />
    <div>
      <h2 className="text-2xl font-bold text-purple-800">{role}</h2>
      <h3 className="text-xl font-bold text-purple-800">{name}</h3>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  </div>
);

export default Pengurus;
