import React from 'react';

function MapsAPISection() {
  return (
    <div className="container mx-auto my-8 px-4 pt-3">
        <h2 className='text-4xl text-center mb-10 font-bold'>LOKASI MAP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Google Maps Section */}
        <div className="w-full">
          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4164.539399054332!2d123.60384092928146!3d-10.172155107956296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569d79d759b8ef%3A0x5ed8aa3ed4c4049b!2sHarlan%2C%20EVan%20KApioru!5e1!3m2!1sen!2sid!4v1726842223786!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        {/* Descriptive Text Section */}
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kunjungi Kantor Kami</h3>
            <p className="text-gray-700 mb-2">
              Jika Anda sedang berkunjung ke Kupang, silahkan mengunjungi kantor kami pada hari:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Senin – Jumat</li>
              <li>Jam Kerja: 08.00 – 17.00</li>
            </ul>
            <p className="text-gray-700">
              Alamat: Jl. El Tari No. 23, Kel. Oebobo, Kec. Oebobo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapsAPISection;
