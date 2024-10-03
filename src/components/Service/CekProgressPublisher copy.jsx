import { Card, Button } from 'flowbite-react';

function CekProgressPublisher() {
  return (
    <div className="flex justify-center items-center pt-10 pb-10 min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Cek Progres Penerbitan Buku Anda</h1>
        <p className="mb-4">
          Selamat! Anda sudah berada di jalur yang tepat untuk menerbitkan buku impian Anda bersama Penerbit Deepublish. Kami sangat senang bisa membantu mewujudkan karya Anda.
        </p>
        <p className="mb-4">
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
        <p className="mb-4 text-center font-semibold">
          Penerbitan buku Anda tinggal selangkah lagi menuju sukses!
        </p>

        {/* Input section (to be added for functionality) */}
        <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
          Cek Progress
        </Button>
      </Card>
    </div>
  );
}

export default CekProgressPublisher;
