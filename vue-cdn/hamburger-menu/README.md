# Membuat Tombol Hamburger dengan Vue.js dan CSS

Dalam tutorial ini, kita akan membuat tombol hamburger menggunakan Vue.js dan CSS. Tombol ini terdiri dari tiga garis horizontal yang berubah menjadi simbol "X" ketika diklik. Proyek ini mengandalkan Vue.js untuk mengelola status tombol dan CSS untuk efek visual.

## Struktur HTML

Kita mulai dengan struktur HTML sederhana. Elemen utama adalah `div` dengan ID `app`, yang berisi tombol hamburger. Setiap garis dibentuk menggunakan elemen `<span>`.

## CSS Styling

CSS digunakan untuk mengatur tampilan tombol. Menggunakan `flexbox`, kita memastikan tombol terletak di tengah layar. Setiap garis (`line`) diatur dengan posisi absolut agar dapat bertransformasi dengan baik saat tombol diklik. Ketika tombol aktif, `line` kedua akan menghilang, sementara `line` pertama dan ketiga berputar untuk membentuk "X". 

## Vue.js

Vue.js digunakan untuk mengelola interaksi pengguna. Kita mendeklarasikan data `isActive` untuk melacak status tombol. Fungsi `toggleMenu` dipanggil saat tombol diklik, mengubah status `isActive` dan memicu efek animasi.

Dengan kombinasi ini, kita dapat membuat tombol hamburger yang responsif dan menarik, cocok untuk digunakan dalam aplikasi web modern.
