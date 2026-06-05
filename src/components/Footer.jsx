// Footer tampil di bawah halaman
function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          <strong>SocialKita</strong> — Mini Social Media App
        </p>
        <p className="footer-sub">Dibuat untuk tugas React JS | Kelas XI RPL</p>
        <p className="footer-copy">© {tahun} — Data dari JSONPlaceholder API</p>
      </div>
    </footer>
  );
}

export default Footer;
