# Read Data

Fungsi untuk mendapatkan value setiap cell yang tidak kosong.

Fungsi `getDataSheet` digunakan untuk mengambil data dari sebuah sheet dalam Google Spreadsheet dan mengubahnya menjadi array of objects.

## Penjelasan Baris per Baris

1. **Definisi Fungsi**
   ```javascript
   function getDataSheet(sheetName) {
   ```
   Mendefinisikan fungsi dengan parameter `sheetName` (nama sheet).

2. **Mengambil Sheet**
   ```javascript
   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
   ```
   Mengambil sheet aktif berdasarkan nama yang diberikan.

3. **Mengambil Data**
   ```javascript
   var values = sheet.getDataRange().getValues();
   ```
   Mengambil semua nilai dari range data dalam sheet tersebut.

4. **Ekstraksi Header**
   ```javascript
   var headers = values.shift();
   ```
   Mengambil baris pertama (diasumsikan sebagai key) dan menghapusnya dari `values`.

5. **Transformasi Data**
   ```javascript
   return values.map(row => headers.reduce((obj, header, i) => {
     obj[header] = header.toLowerCase() === 'date' ? convertDate(row[i]) : row[i];
     return obj;
   }, {}));
   ```
   - Menggunakan `map()` untuk iterasi setiap baris data.
   - `reduce()` digunakan untuk membuat objek dari setiap baris.
   - Jika key adalah 'date', nilai dikonversi dengan `convertDate()` (fungsi ini untuk rubah format tanggal).
   - Hasil akhir adalah array of objects, di mana setiap objek mewakili satu baris data.
