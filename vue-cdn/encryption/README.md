### Penjelasan Fungsi dalam Kode Encode & Decode

Aplikasi ini dirancang untuk melakukan encoding dan decoding teks menggunakan berbagai metode enkripsi. Kode ini ditulis menggunakan Vue.js dan memanfaatkan HTML untuk antarmuka pengguna. Di bawah ini adalah penjelasan tentang fungsi-fungsi utama dalam kode.

#### 1. **processText()**

Fungsi ini bertanggung jawab untuk memproses teks yang dimasukkan oleh pengguna. Bergantung pada opsi yang dipilih (encode atau decode), fungsi ini akan memanggil `encodeText()` atau `decodeText()` untuk melakukan operasi yang sesuai. Jika opsi yang dipilih adalah "encode", fungsi ini akan memanggil `encodeText()` dengan teks input. Sebaliknya, jika opsi "decode" yang dipilih, fungsi ini akan memanggil `decodeText()`.

#### 2. **encodeText(text)**

Fungsi ini melakukan encoding pada teks yang diberikan berdasarkan metode enkripsi yang dipilih. Metode yang didukung meliputi:
- **Base64**: Mengkonversi teks ke format Base64.
- **Hex**: Mengubah teks menjadi representasi heksadesimal.
- **Rot13**: Melakukan rotasi 13 posisi pada setiap karakter huruf.
- **Caesar**: Menggeser setiap karakter dengan jumlah tertentu (default 3).
- **URL Encode**: Mengencode teks untuk digunakan dalam URL.
- **SHA-1, SHA-256, MD5**: Menghasilkan hash dari teks menggunakan algoritma hashing.
- **AES**: Mengenkripsi teks menggunakan algoritma AES.

Hasil dari encoding dikembalikan sebagai output dari fungsi ini.

#### 3. **decodeText(text)**

Fungsi ini berfungsi untuk mendekode teks yang telah di-encode. Mirip dengan `encodeText()`, fungsi ini juga memeriksa metode enkripsi yang dipilih dan melakukan operasi yang sesuai. Namun, tidak semua metode enkripsi dapat didekode. Misalnya, hashing (SHA-1, SHA-256, MD5) tidak dapat dibalik, sehingga fungsi ini mengembalikan pesan yang menyatakan bahwa hashing tidak dapat dibalik. Untuk metode AES, teks yang dienkripsi akan didekripsi menggunakan kunci yang sama.

#### 4. **toHex(text)**

Fungsi ini mengubah setiap karakter dalam teks menjadi representasi heksadesimalnya. Dengan menggunakan `Array.from()`, fungsi ini mengonversi string menjadi array karakter, kemudian mengubah setiap karakter menjadi nilai desimalnya dan mengonversinya menjadi format heksadesimal.

#### 5. **fromHex(hex)**

Fungsi ini melakukan operasi kebalikan dari `toHex()`, yaitu mengonversi string heksadesimal kembali ke bentuk string asli. Fungsi ini memecah string heksadesimal menjadi potongan dua karakter, kemudian mengonversi setiap potongan kembali menjadi karakter.

#### 6. **rot13(text)**

Fungsi ini menerapkan teknik enkripsi Rot13, yang mengganti setiap huruf dengan huruf yang berjarak 13 posisi di dalam alfabet. Fungsi ini mengembalikan teks yang telah dimodifikasi dengan cara ini.

#### 7. **caesar(text, shift)**

Fungsi ini menerapkan algoritma Caesar cipher pada teks, di mana setiap karakter dalam teks digeser dengan jumlah tertentu (dapat ditentukan oleh parameter `shift`). Fungsi ini berguna untuk menerapkan enkripsi sederhana pada teks.

#### 8. **resetFields()**

Fungsi ini digunakan untuk mengosongkan `inputText` dan `outputText`. Fungsi ini dipanggil setiap kali pengguna mengganti opsi encoding atau decoding, memastikan bahwa tidak ada data lama yang tertinggal.

#### 9. **copyToClipboard()**

Fungsi ini memungkinkan pengguna untuk menyalin output ke clipboard. Menggunakan API clipboard, fungsi ini menyalin teks yang telah dihasilkan ke clipboard dan menampilkan pesan konfirmasi bahwa teks telah disalin. Pesan ini akan hilang setelah beberapa detik.

### Kesimpulan

Kode aplikasi Encode & Decode ini menggabungkan berbagai metode enkripsi dan dekripsi melalui antarmuka pengguna yang sederhana. Dengan fungsi-fungsi yang terorganisir dengan baik, pengguna dapat dengan mudah melakukan encoding dan decoding teks sesuai dengan kebutuhan mereka. Aplikasi ini juga menunjukkan bagaimana Vue.js dapat digunakan untuk membuat aplikasi web yang interaktif dan responsif.
