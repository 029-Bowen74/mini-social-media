import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // State untuk menyimpan data user dari API
  const [users, setUsers] = useState([]);

  // State untuk loading dan error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State untuk fitur pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect dijalankan sekali saat komponen pertama kali muncul
  useEffect(() => {
    // Fetch data user dari JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // cek apakah response berhasil
        if (!response.ok) {
          throw new Error("Gagal mengambil data!");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // array kosong = hanya jalan sekali

  // Filter user berdasarkan nama yang dicari
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Tampilan saat loading
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Sedang memuat data user...</p>
      </div>
    );
  }

  // Tampilan saat error
  if (error) {
    return (
      <div className="error-screen">
        <p>⚠️ Error: {error}</p>
        <button onClick={() => window.location.reload()}>Coba Lagi</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <div className="page-header">
          <h2 className="page-title">👤 Daftar Pengguna</h2>
          <p className="page-subtitle">
            Temukan dan ikuti pengguna yang kamu kenal!
          </p>
        </div>

        {/* Komponen SearchBar dengan fitur useRef */}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Info hasil pencarian */}
        {searchQuery && (
          <p className="search-result-info">
            Menampilkan {filteredUsers.length} hasil untuk &quot;{searchQuery}&quot;
          </p>
        )}

        {/* Tampilkan pesan kalau tidak ada hasil */}
        {filteredUsers.length === 0 ? (
          <div className="no-result">
            <p>😕 Tidak ada user dengan nama &quot;{searchQuery}&quot;</p>
          </div>
        ) : (
          <div className="users-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;