import  { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaUniversity, FaBook } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

function AuthorPublisherForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    frontDegree: '',
    backDegree: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
    institution: '',
    otherJob: '',
    address: '',
    selectedService: '',
    bookSize: '',
    pageCount: '',
    printCount: '',
    previouslyPublished: '',
    communicationWithConsultant: '',
    bookType: '',
    manuscriptReadiness: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission (e.g., send data to server)
  };

  const inputClass = (filled) => 
    `mt-1 p-2 border rounded-md w-full ${filled ? 'border-purple-800' : 'border-gray-300'}`;

  return (
    <div className="flex justify-center items-center pt-10 pb-10 min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">FORM DAFTAR MENJADI PENULIS</h1>

        <hr />
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaUser className="mr-2 text-blue-800" /> Nama Depan
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={inputClass(formData.firstName)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaUser className="mr-2 text-blue-800" /> Nama Belakang
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={inputClass(formData.lastName)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaUser className="mr-2 text-blue-800" /> Gelar Depan
            </label>
            <input
              type="text"
              name="frontDegree"
              value={formData.frontDegree}
              onChange={handleChange}
              className={inputClass(formData.frontDegree)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaUser className="mr-2 text-blue-800" /> Gelar Belakang
            </label>
            <input
              type="text"
              name="backDegree"
              value={formData.backDegree}
              onChange={handleChange}
              className={inputClass(formData.backDegree)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaPhone className="mr-2 text-blue-800" /> No Handphone
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className={inputClass(formData.phoneNumber)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaEnvelope className="mr-2 text-blue-800" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass(formData.email)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-800" /> Tanggal Lahir
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className={inputClass(formData.birthDate)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaUniversity className="mr-2 text-blue-800" /> Institusi
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className={inputClass(formData.institution)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <MdAttachMoney className="mr-2 text-blue-800" /> Pekerjaan Lainnya
            </label>
            <input
              type="text"
              name="otherJob"
              value={formData.otherJob}
              onChange={handleChange}
              className={inputClass(formData.otherJob)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">Alamat</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={`mt-1 p-2 border rounded-md w-full ${formData.address ? 'border-purple-800' : 'border-gray-300'}`}
            />
          </div>

          {/* Publishing Information */}
          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Jasa yang Dipilih
            </label>
            <input
              type="text"
              name="selectedService"
              value={formData.selectedService}
              onChange={handleChange}
              required
              className={inputClass(formData.selectedService)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Ukuran Buku
            </label>
            <select
              name="bookSize"
              value={formData.bookSize}
              onChange={handleChange}
              required
              className={inputClass(formData.bookSize)}
            >
              <option value="">Ukuran Buku</option>
              <option value="A4">A4</option>
              <option value="A5">A5</option>
              <option value="B5">B5</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Jumlah Halaman
            </label>
            <input
              type="number"
              name="pageCount"
              value={formData.pageCount}
              onChange={handleChange}
              required
              className={inputClass(formData.pageCount)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Jumlah Cetakan
            </label>
            <input
              type="number"
              name="printCount"
              value={formData.printCount}
              onChange={handleChange}
              required
              className={inputClass(formData.printCount)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Sudah Menerbitkan Buku?
            </label>
            <select
              name="previouslyPublished"
              value={formData.previouslyPublished}
              onChange={handleChange}
              required
              className={inputClass(formData.previouslyPublished)}
            >
              <option value="">Sudah Menerbitkan Buku?</option>
              <option value="yes">Ya</option>
              <option value="no">Tidak</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Berkomunikasi dengan Konsultan?
            </label>
            <select
              name="communicationWithConsultant"
              value={formData.communicationWithConsultant}
              onChange={handleChange}
              required
              className={inputClass(formData.communicationWithConsultant)}
            >
              <option value="">Berkomunikasi dengan Konsultan?</option>
              <option value="yes">Ya</option>
              <option value="no">Tidak</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Mau Menerbitkan Buku Apa?
            </label>
            <select
              name="bookType"
              value={formData.bookType}
              onChange={handleChange}
              required
              className={inputClass(formData.bookType)}
            >
              <option value="">Mau Menerbitkan Buku Apa?</option>
              <option value="fiction">Fiksi</option>
              <option value="non-fiction">Non-Fiksi</option>
              <option value="children">Anak-Anak</option>
              <option value="academic">Akademik</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 flex items-center">
              <FaBook className="mr-2 text-blue-800" /> Kesiapan Naskah
            </label>
            <select
              name="manuscriptReadiness"
              value={formData.manuscriptReadiness}
              onChange={handleChange}
              required
              className={inputClass(formData.manuscriptReadiness)}
            >
              <option value="">Kesiapan Naskah</option>
              <option value="ready">Siap</option>
              <option value="not_ready">Belum Siap</option>
            </select>
          </div>
          <hr />

          <p>
          Silakan CEK KEMBALI data diri Anda. Apabila data diri yang Anda masukkan sudah benar, silakan Anda KLIK TOMBOL DAFTAR di bawah ini.
          </p>

          {/* Submit Button */}
          <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Daftar
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AuthorPublisherForm;
