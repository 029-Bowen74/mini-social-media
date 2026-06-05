import { createContext, useState, useContext } from "react";

// Membuat context untuk menyimpan data global (like dan follow)
export const AppContext = createContext();

// Custom hook biar gampang dipake di component lain
export function useAppContext() {
  return useContext(AppContext);
}

// Provider yang membungkus seluruh aplikasi
function AppProvider({ children }) {
  // State untuk menyimpan id user yang sudah di-like
  const [likedUsers, setLikedUsers] = useState([]);

  // State untuk menyimpan id user yang sudah di-follow
  const [followedUsers, setFollowedUsers] = useState([]);

  // Fungsi untuk toggle like
  function toggleLike(userId) {
    if (likedUsers.includes(userId)) {
      // kalau sudah di-like, hapus dari list
      setLikedUsers(likedUsers.filter((id) => id !== userId));
    } else {
      // kalau belum di-like, tambahkan ke list
      setLikedUsers([...likedUsers, userId]);
    }
  }

  // Fungsi untuk toggle follow
  function toggleFollow(userId) {
    if (followedUsers.includes(userId)) {
      setFollowedUsers(followedUsers.filter((id) => id !== userId));
    } else {
      setFollowedUsers([...followedUsers, userId]);
    }
  }

  // Nilai yang dibagikan ke seluruh component
  const value = {
    likedUsers,
    followedUsers,
    toggleLike,
    toggleFollow,
    totalLike: likedUsers.length,
    totalFollow: followedUsers.length,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
