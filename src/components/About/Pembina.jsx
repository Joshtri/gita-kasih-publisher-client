import React from 'react';
import person1Img from '../../assets/pembina/perosn1.jpg'
import person2Img from '../../assets/pembina/person2.jpg'
import person3Img from '../../assets/pembina/person3.jpg'


const Pembina = () => {
  return (
    <div className="p-8 mb-10 mt-10 bg-blue-800 text-white rounded-lg">
      <div className="text-right">
        <h1 className="text-6xl font-bold">Pembina</h1>
      </div>
      <div className="mt-12 space-y-8">
        <Member
          role="Ketua"
          name="Pdt. Marthen Luther Djari"
          imgSrc={person1Img}
        />
        <Member
          role="Anggota"
          name="Yohana H. Lada-Sitta"
          imgSrc={person2Img}
        />
        <Member
          role="Pengawas"
          name="Ruben Denny Djari"
          imgSrc={person3Img}
        />
      </div>
    </div>
  );
};

const Member = ({ role, name, imgSrc }) => (
  <div className="flex items-center space-x-4">
    <img alt={`Portrait of ${role}`} className="w-24 h-24 rounded-lg border-2 border-black" src={imgSrc} />
    <div>
      <h2 className="text-2xl font-bold">{role}</h2>
      <p className="text-xl">{name}</p>
    </div>
  </div>
);

export default Pembina;
