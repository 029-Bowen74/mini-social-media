import { useAppContext } from "../context/AppContext";

// Navbar tampil di bagian atas halaman
function Navbar() {
  const { totalLike, totalFollow } = useAppContext();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">📱</span>
        <h1 className="brand-name">SocialKita</h1>
      </div>

      <div className="navbar-stats">
        {/* Menampilkan total like dan follow secara global */}
        <div className="stat-item">
          <span className="stat-icon">❤️</span>
          <span className="stat-count">{totalLike}</span>
          <span className="stat-label">Total Like</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">👥</span>
          <span className="stat-count">{totalFollow}</span>
          <span className="stat-label">Total Follow</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;