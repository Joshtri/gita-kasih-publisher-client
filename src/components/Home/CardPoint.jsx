import { FaRegCheckCircle, FaBookOpen, FaMoneyBillWave, FaShoppingBag } from 'react-icons/fa';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

function CardPoint() {
  return (
    <div className='flex justify-center my-8'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* First Card */}
        <Card className="text-center shadow-lg p-4 max-w-xs bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100">
          <div className="flex justify-center mb-2">
            <FaBookOpen className="text-5xl text-blue-500 transition-transform duration-200 ease-in-out hover:scale-125" />
          </div>
          <Link to='/daftar-penulis-buku'>
            <h2 className="text-xl font-bold transform transition-transform duration-150 hover:scale-105 text-blue-600">Mulai Menerbitkan</h2>
          </Link>
        </Card>

        {/* Second Card */}
        <Card className="text-center shadow-lg p-4 max-w-xs bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100">
          <div className="flex justify-center mb-2">
            <FaRegCheckCircle className="text-5xl text-blue-500 transition-transform duration-200 ease-in-out hover:scale-125" />
          </div>
          <Link to='/cek-progress'>
            <h2 className="text-xl font-bold transform transition-transform duration-150 hover:scale-105 text-blue-600">Lihat Progress Buku</h2>
          </Link>
        </Card>

        {/* Third Card */}
        <Card className="text-center shadow-lg p-4 max-w-xs bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100">
          <div className="flex justify-center mb-2">
            <FaMoneyBillWave className="text-5xl text-blue-500 transition-transform duration-200 ease-in-out hover:scale-125" />
          </div>
          <h2 className="text-xl font-bold transform transition-transform duration-150 hover:scale-105 text-blue-600">Cek Royalti</h2>
        </Card>

        {/* Fourth Card */}
        <Card className="text-center shadow-lg p-4 max-w-xs bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100">
          <div className="flex justify-center mb-2">
            <FaShoppingBag className="text-5xl text-blue-500 transition-transform duration-200 ease-in-out hover:scale-125" />
          </div>
          <Link to='/toko-online-buku'>
            <h2 className="text-xl font-bold transform transition-transform duration-150 hover:scale-105 text-blue-600">Toko Buku Online</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default CardPoint;
