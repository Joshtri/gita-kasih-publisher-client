// import { Link } from 'react-router-dom';
import publisherImg from '../../assets/publisherImg.jpg';

function PublisherAbout() {
    return (
        <section id="home" className="relative py-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white animate-gradient-x">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10 relative z-10 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 bg-opacity-15">
                    {/* Introduction */}
                    <div className="lg:w-1/2 p-2 text-gray-100">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Tentang Penerbit Buku</h1>
                        <h1 className="text-2xl lg:text-4xl font-bold mb-4 pt-3">Gita Kasih Publisher</h1>
                        <p className="text-lg lg:text-xl mb-6">
                            Kami berdedikasi untuk mendukung penulis dalam menerbitkan karya terbaik mereka dan memperoleh ISBN resmi.
                            Dengan kami, setiap ide akan menjadi nyata, dan buku Anda akan tersebar luas membawa inspirasi dan wawasan kepada banyak orang.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="lg:w-1/2 p-0">
                        <img
                            src={publisherImg}
                            alt="Gita Kasih Publisher"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PublisherAbout;
