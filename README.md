SocialKita

Project React JS sederhana yang dibuat untuk tugas Pemrograman Web kelas XI PPLG.

Deskripsi Project

SocialKita adalah aplikasi mini social media yang menggunakan data pengguna dari API JSONPlaceholder.

Fitur yang tersedia:

- Menampilkan daftar pengguna
- Mencari pengguna berdasarkan nama
- Memberikan Like pada pengguna
- Follow pengguna
- Menampilkan jumlah total Like dan Follow pada Navbar

---

Penjelasan Komponen

Navbar.jsx

Komponen yang menampilkan nama aplikasi serta jumlah total Like dan Follow yang diambil dari Context API.

UserCard.jsx

Komponen untuk menampilkan data pengguna seperti nama, username, dan email. Di dalamnya terdapat tombol Like dan Follow.

SearchBar.jsx

Komponen input pencarian yang digunakan untuk mencari pengguna berdasarkan nama. Menggunakan useRef untuk fitur fokus otomatis ke input.

Footer.jsx

Komponen footer yang ditampilkan di bagian bawah halaman.

AppContext.jsx

Menyimpan data Like dan Follow secara global agar bisa digunakan oleh beberapa komponen.

App.jsx

Komponen utama yang mengambil data dari API, mengatur pencarian, dan menampilkan seluruh komponen.

---

Implementasi React Hooks dalam Project ini

1. useState

Digunakan untuk menyimpan data yang dapat berubah.

Implementasi:

const [followedUsers, setFollowedUsers] = useState([]);

---

2. useEffect

Digunakan untuk mengambil data dari API saat halaman pertama kali dibuka.

Implementasi:

  useEffect(() => {
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
  }, []);

---

3. useContext

Digunakan untuk mengakses data Like dan Follow dari Context API.

Implementasi:

export function useAppContext() {
  return useContext(AppContext);
}

---

4. useRef

Digunakan untuk mengakses elemen input pencarian secara langsung.

Implementasi:

const inputRef = useRef(null);
function handleFocusClick() {
  inputRef.current.focus();
  }

---

Implementasi Fetch API

Project ini menggunakan Fetch API untuk mengambil data pengguna dari:

https://jsonplaceholder.typicode.com/users

Implementasi:

  useEffect(() => {
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
  }, []);

Data yang digunakan:

- id
- name
- username
- email

---

Kesimpulan

Melalui project ini saya mempelajari:

1. Penggunaan React Hooks seperti useState, useEffect, useContext, dan useRef.
2. Cara mengambil data dari API menggunakan Fetch API.
3. Cara membuat komponen React yang terpisah sesuai fungsinya.
4. Cara menggunakan Context API untuk berbagi data antar komponen.
5. Cara membuat fitur pencarian data secara real-time.

---

Nama: Ricardo Owen Grahihan
Kelas: XI PPLG 1
Mata Pelajaran: KKJ
