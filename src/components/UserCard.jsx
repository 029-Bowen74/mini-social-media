import { useAppContext } from "../context/AppContext";

// UserCard menampilkan informasi satu user
function UserCard({ user }) {
  // Ambil data dan fungsi dari context global
  const { likedUsers, followedUsers, toggleLike, toggleFollow } =
    useAppContext();

  // Cek apakah user ini sudah di-like atau di-follow
  const sudahDiLike = likedUsers.includes(user.id);
  const sudahDiFollow = followedUsers.includes(user.id);

  // Buat inisial nama untuk avatar
  const inisial = user.name
    .split(" ")
    .slice(0, 2)
    .map((kata) => kata[0])
    .join("")
    .toUpperCase();

  // Warna avatar berdasarkan id user (biar beda-beda)
  const warnaAvatar = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
  ];
  const warna = warnaAvatar[(user.id - 1) % warnaAvatar.length];

  return (
    <div className={`user-card ${sudahDiFollow ? "card-followed" : ""}`}>
      {/* Avatar dengan inisial nama */}
      <div className="user-avatar" style={{ backgroundColor: warna }}>
        <span className="avatar-text">{inisial}</span>
      </div>

      {/* Info user */}
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-username">@{user.username}</p>
        <p className="user-email">✉️ {user.email}</p>
      </div>

      {/* Tombol aksi */}
      <div className="user-actions">
        <button
          className={`btn-like ${sudahDiLike ? "liked" : ""}`}
          onClick={() => toggleLike(user.id)}
        >
          {sudahDiLike ? "❤️" : "🤍"} {sudahDiLike ? "Liked" : "Like"}
        </button>

        <button
          className={`btn-follow ${sudahDiFollow ? "following" : ""}`}
          onClick={() => toggleFollow(user.id)}
        >
          {sudahDiFollow ? "✓ Following" : "+ Follow"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
