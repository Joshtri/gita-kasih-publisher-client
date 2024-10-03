import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

function CekProgressDescription() {
  return (
    <div className="flex justify-center items-center pt-10 pb-10 min-h-screen bg-gray-200">
      <Card className="w-full max-w-4xl p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Cek Progres Penerbitan Buku Anda</h1>
        <hr />
        <p className="mb-0">
          Selamat! Anda sudah berada di jalur yang tepat untuk menerbitkan buku impian Anda bersama Penerbit Gita Kasih Publisher. Kami sangat senang bisa membantu mewujudkan karya Anda.
        </p>
        <p className="mb-0">
          Di sini, Anda dapat dengan mudah mengecek setiap tahapan perjalanan naskah Anda, mulai dari penerimaan hingga produksi. Jangan lewatkan momen penting dalam proses penerbitan buku Anda.
        </p>
        <p className="mb-4">
          Ikuti langkah sederhana di bawah ini untuk mengetahui progres buku Anda:
        </p>
        <ol className="mb-4 list-decimal list-inside">
          <li>Masukkan judul buku Anda di kolom “Masukkan judul buku Anda di sini!”.</li>
          <li>Tekan tombol “Enter” atau klik “Cek Progress” dan lihat hasilnya.</li>
          <li>Anda akan segera mengetahui sampai mana buku Anda berada di jalur penerbitan.</li>
        </ol>
        <p className="mb-4 font-semibold">
          Penerbitan buku Anda tinggal selangkah lagi menuju sukses!
        </p>

        {/* Input section (to be added for functionality) */}
        <Link to='/section-cek-progress' className="mt-4 w-1/2 text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Cek Progress
        </Link>

        <p className='font-semibold'>
            Ada pertanyaan atau butuh bantuan? Hubungi Konsultan Penerbitan Kami dibawah ini !.
        </p>
      </Card>
    </div>
  );
}

export default CekProgressDescription;
