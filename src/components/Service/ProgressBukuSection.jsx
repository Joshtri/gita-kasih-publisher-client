import { useState, useEffect } from "react";
import axios from "axios";

const ProgressBukuSection = () => {
  const [authorBookPublish, setAuthorBookPublish] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // Store the selected book's progress
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [isLoading, setIsLoading] = useState(true); // Loading state for fetching data
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtered books for the dropdown

  useEffect(() => {
    getBookProgress();
  }, []);

  const getBookProgress = async () => {
    try {
      setIsLoading(true); // Start loading
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/books-progress`);
      setAuthorBookPublish(response.data);
    } catch (error) {
      console.error('Failed to fetch books progress:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Handle search term change and filter books
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const filtered = authorBookPublish.filter(
        (book) => book.judulBuku && book.judulBuku.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  // Function to handle selecting a book from the suggestions
  const handleSelectBook = (book) => {
    setSelectedBook(book); // Set the selected book to display its progress
    setSearchTerm(book.judulBuku); // Set the search term to the selected book's title
    setFilteredBooks([]); // Clear the suggestions list after selection
  };

  // Mock progress data for display
  const mockProgressData = [
    { stage: "Status Naskah", date: "Belum Di Proses" },
    { stage: "Cek Administrasi", date: "Belum Di Proses" },
    { stage: "Antrian Layout & Desain", date: "Belum Di Proses" },
    { stage: "Informasi Harga", date: "Belum Di Proses" },
    { stage: "Proses ke Perpusnas (Masuk ISBN)", date: "Belum Di Proses" },
    { stage: "Proses ke Perpusnas (Keluar ISBN)", date: "Belum Di Proses" },
    { stage: "Proses Produksi", date: "Belum Di Proses" },
    { stage: "Pengiriman (Ekspedisi: -, No. Resi: -)", date: "Belum Di Proses" }
  ];

  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen pt-10 pb-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-center text-2xl font-semibold mb-6">Cari Progress Buku</h1>

        {/* Search Input */}
        <div className="mb-6 relative">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Cari berdasarkan judul buku..."
            value={searchTerm}
            onChange={handleSearchChange} // Update search term on input change
          />
          
          {/* Suggestions List */}
          {filteredBooks.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-y-auto">
              {filteredBooks.map((book, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectBook(book)} // Select the book on click
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {book.judulBuku}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="text-center mb-6">
            <span className="loader"></span>
            <p className="text-gray-600">Memuat progress buku...</p>
          </div>
        )}

        {/* Progress Timeline */}
        {selectedBook && (
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300"></div>
            <div className="space-y-4">
              {mockProgressData.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center">
                      <i className="fas fa-leaf"></i>
                    </div>
                  </div>
                  <div className="ml-8 p-4 bg-white border border-gray-300 rounded shadow-sm w-full">
                    <h2 className="font-semibold">{item.stage}</h2>
                    <p className="text-gray-600 whitespace-pre-line">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBukuSection;
