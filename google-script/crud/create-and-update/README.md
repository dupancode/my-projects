Berikut adalah penjelasan cara kerja dan fungsi kode:


Fungsi `insertDataBot` digunakan untuk memasukkan atau memperbarui data dalam Google Sheets. Berikut adalah penjelasan detail tentang cara kerjanya:

## Variabel Global

```javascript
let SHEET_NAME = "";
```

- `SHEET_NAME` adalah variabel global yang menyimpan nama sheet yang akan dioperasikan.

## Parameter Fungsi

```javascript
function insertDataBot(dataUpdate) {
  // ...
}
```

- Fungsi menerima satu parameter `dataUpdate`, yang berisi objek dengan data yang akan dimasukkan atau diperbarui.

## Persiapan Data

```javascript
const data = getDataSheet(SHEET_NAME);
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
let dataUpdates;
```

- `data`: Mengambil data dari sheet yang ditentukan menggunakan fungsi `getDataSheet()`.
- `sheet`: Mendapatkan objek sheet yang akan dioperasikan.
- `dataUpdates`: Variabel untuk menyimpan data yang akan dimasukkan.

## Pemformatan Data

```javascript
switch (SHEET_NAME) {
  case "pending":
    // Format untuk sheet "pending"
    break;
  case "investment":
    // Format untuk sheet "investment"
    break;
}
```

- Memformat data berdasarkan jenis sheet ("pending" atau "investment").
- Untuk "pending", menyusun data order ID, tanggal, simbol, harga, dan kuantitas.
- Untuk "investment", menyusun data dengan formula untuk nomor baris, simbol, tanggal, harga IDR dan USDT, kuantitas, jumlah, dan tipe.

## Pencarian Data Existing

```javascript
const keys = Object.keys(data[0]);
const existingItemIndex = data.findIndex(item => item.id === dataUpdate.id);
```

- `keys`: Mendapatkan nama-nama kolom dari baris pertama data.
- `existingItemIndex`: Mencari indeks item dengan ID yang sama dengan `dataUpdate.id`.

## Pembaruan atau Penambahan Data

1. Jika data sudah ada (existingItemIndex !== -1):
   - Memperbarui nilai-nilai yang sesuai untuk setiap kolom.
   - Menggunakan `Object.entries()` untuk iterasi properti `dataUpdate`.
   - Mengabaikan kolom "id" saat memperbarui.
   - Mengembalikan status 200 (sukses).

2. Jika menambahkan data baru (dataUpdate.id === "tambah"):
   - Menambahkan baris baru dengan `sheet.appendRow(dataUpdates)`.
   - Mengembalikan status 200 (sukses).

3. Jika tidak ada yang cocok:
   - Mengembalikan status 404 (tidak ditemukan).

## Kode Status

- 200: Operasi berhasil (data diperbarui atau ditambahkan)
- 404: Data tidak ditemukan (untuk operasi pembaruan)

Fungsi ini memberikan fleksibilitas untuk menangani dua jenis sheet berbeda dengan format data yang berbeda, serta kemampuan untuk memperbarui data yang sudah ada atau menambahkan data baru.
