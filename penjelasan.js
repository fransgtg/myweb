document.getElementById("pengertianHTML1").innerHTML = `
  <h1><b>Pengertian HTML</b></h1>
  <p>HTML adalah bahasa markup yang digunakan untuk membuat dan menyusun struktur halaman web.</p><br>
  <h1><b>Struktur Dasar HTML</b></h1>
  <p>Struktur dasar HTML membentuk fondasi dari setiap halaman web. 
  Dengan memahami elemen-elemen inti dan cara menyusunnya, kamu akan dapat membuat halaman web yang terorganisir dan fungsional.<br><br>
  HTML menggunakan berbagai tag untuk membuat elemen, seperti judul, paragraf, gambar, dan tautan. Setiap dokumen HTML dimulai dengan deklarasi doctype dan diikuti oleh elemen-elemen penting, seperti &lt;html&gt;, &lt;head&gt;, dan &lt;body&gt;.</p><br>
  <p>Setiap dokumen HTML memiliki struktur dasar yang perlu diikuti. Berikut adalah contoh struktur dasar dari dokumen HTML.</p><br>
`;

// Buat elemen tabel
let table = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";
table.style.width = "80%";
table.style.margin = "20px auto";

// Data contoh (teks HTML yang ingin ditampilkan)
let data = `
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lttitle&gt;Judul Halaman&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Selamat Datang di Website Saya&lt;/h1&gt;
    &lt;p&gt;Ini adalah paragraf pertama saya.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
`;

// Buat 1 baris dan 1 kolom untuk menampung data
let tr = document.createElement("tr");
let td = document.createElement("td");

// Gaya kotaknya
td.style.padding = "15px";
td.style.fontFamily = "Consolas, monospace";
td.style.whiteSpace = "pre"; // biar format kode tetap sama
td.style.backgroundColor = "#f8f8f8";

// Isi teks ke dalam cell
td.innerHTML = data;

// Tambahkan ke tabel
tr.appendChild(td);
table.appendChild(tr);

// Tampilkan tabel ke halaman HTML
document.getElementById("tabel-container").appendChild(table);

document.getElementById("pengertianHTML2").innerHTML = `
    <p>Berikut adalah penjelasan dari struktur dasar dokumen HTML tersebut.</p>
    &lt;!DOCTYPE html&gt;, ini memberi tahu browser bahwa dokumen ini menggunakan HTML5.<br>
    &lt;html&gt;, Elemen root dari dokumen HTML.<br>
    &lt;head&gt;, Bagian yang berisi informasi meta tentang dokumen, seperti judul dokumen.<br>
    &lttitle&gt;, Ini adalah judul halaman yang ditampilkan pada tab browser.<br>
    &lt;body&gt;, Bagian berisi konten yang akan ditampilkan di halaman web.<br><br>
    <h1><b>Elemen Teks</b></h1>
    <p>Elemen teks dalam HTML digunakan untuk menyusun dan menampilkan konten teks di halaman web.
    Elemen-elemen ini memungkinkan kamu untuk mengatur teks dengan berbagai cara, yakni menambahkan 
    judul, paragraf, daftar, kutipan, dan banyak lagi.</p><br>
    <p>Dalam coding HTML, kamu akan menggunakan berbagai tag teks, seperti &lt;h1&gt; hingga &lt;h6&gt; untuk judul, 
    &lt;p&gt; untuk paragraf, &lt;ul&gt; dan &lt;ol&gt; untuk list. Dengan memahami cara kerja elemen teks, 
    kamu dapat membuat konten web yang lebih terstruktur dan mudah dibaca. Pada bagian ini, kita akan 
    menjelajahi berbagai elemen teks yang tersedia dalam HTML dan cara menggunakannya secara efektif.</p>
`

document.getElementById("CSS").innerHTML = `
    <h1><b>CSS</b></h1>
    <p>CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dan layout halaman web. 
    CSS bekerja bersama HTML untuk mengatur cara elemen-elemen HTML ditampilkan. 
    Untuk memahami perbedaan antara HTML dan CSS, mari kita gunakan perumpamaan sebuah bangunan rumah. 
    Anggaplah HTML sebagai kerangka dan struktur dasar sebuah rumah. HTML adalah fondasi, dinding, dan atap rumah tersebut. 
    Elemen-elemen HTML seperti bata, semen, dan rangka kayu yang menyusun struktur rumah.</p><br><br>
    <p>CSS adalah sesuatu yang memberi gaya pada rumah tersebut. CSS adalah cat, dekorasi, dan segala sesuatu yang membuat rumah 
    terlihat indah dan nyaman. CSS mengatur cara elemen HTML ditampilkan di halaman web, termasuk warna, ukuran, posisi, dan gaya teks.
    Untuk menambahkan CSS ke dalam sebuah dokumen HTML, kita dapat melakukannya melalui tiga cara berikut.</p><br>
    <p>inline CSS : Menggunakan atribut style langsung pada elemen HTML.</p>
    <p>&lt;p style="color: red;"&gt;Teks merah&lt;/p&gt;</p><br>
    <p>Internal CSS : Menggunakan elemen &lt;style&gt; dalam tag &lt;head&gt;.</p>
    <p>&lt;head&gt;<br>&lt;style&gt;<br>p { color: blue; }<br>&lt;/style&gt;<br>&lt;/head&gt;</p><br>
    <p>Eksternal CSS : Menggunakan file CSS terpisah.<p>
    &lt;p&gt;XHTML<br>&lt;head&gt;<br>&lt;link rel="stylesheet" href="styles.css"&gt;<br>&lt;/head&gt;
    `

document.getElementById("JS").innerHTML = `
    <h1><b>JavaScript</b></h1>
    <p>JavaScript adalah skrip pemrograman ringan yang umumnya digunakan oleh web developer untuk menciptakan interaksi yang 
    lebih dinamis saat membuat halaman web, aplikasi, server, atau game.Web developer biasanya menggunakan JavaScript bersama 
    HTML dan CSS karena ketiganya bisa bekerja sama tanpa masalah. JavaScript adalah skrip pemrogramannya, HTML berfungsi untuk 
    menyusun struktur website, dan CSS untuk mendesain serta mengatur layout halaman website.</p><br>
    <p>Fungsi JavaScript yang paling umum adalah untuk pengembangan aplikasi web dan mobile, membangun web server dan aplikasi server, 
    membuat website yang interaktif, serta game development. Bahasa pemrograman JavaScript sekarang memiliki banyak framework dan library 
    yang bisa membantu mempercepat proses, seperti AngularJS, jQuery, and ReactJS.</p><br>
    <h1><b>Cara Kerja JavaScript</b></h1>
    <p>JavaScript di-embed langsung ke halaman web atau direferensikan melalui file .js terpisah. Saat pengunjung membuka halaman web, 
    browser akan menjalankan skrip beserta kode HTML dan CSS untuk membuat halaman fungsional yang disajikan melalui tab browser.<br><br>
    Skrip kemudian didownload dan diproses di perangkat pengunjung. Yap, seperti yang kami jelaskan tadi, JavaScript adalah bahasa sisi klien. 
    Jadi tidak seperti bahasa server side di mana server memproses skrip sebelum dikirim ke browser.<br><br>Saat menemukan blok kode JavaScript, 
    browser web akan memprosesnya dari atas ke bawah. Karena urutan akan diperhitungkan, pastikan Anda mereferensikan objek atau variabel 
    di dalam blok lebih dulu sebelum memodifikasinya. Apabila memiliki variabel tanpa nilai, error undefined akan muncul.</p>
`

document.getElementById("tailwind").innerHTML = `
    <h1><b>Tailwind CSS</b></h1>
    <p>Tailwind adalah sebuah utility-first CSS framework yang memungkinkan pengembang untuk membangun desain yang kompleks dengan mudah. 
    Tidak seperti framework CSS lainnya yang menyediakan komponen siap pakai, Tailwind memberikan utility classes yang dapat digunakan 
    untuk menyesuaikan tampilan elemen HTML dengan cepat.</p><br>
    <p>Tailwind menawarkan banyak keuntungan yang membuatnya populer di kalangan pengembang web. Pertama, Tailwind sangat fleksibel. 
    Anda bisa mengatur setiap detail dari elemen user interface (UI) tanpa harus menulis CSS custom. Kedua, Tailwind mempercepat 
    proses pengembangan karena Anda tidak perlu keluar dari HTML untuk menulis style. Ketiga, Tailwind memungkinkan penggunaan desain 
    konsisten di seluruh proyek karena semua style diatur melalui utility classes.</p><br>
    <p>Untuk memulai menggunakan Tailwind CSS, ada beberapa tools yang perlu Anda ketahui. Tailwind dapat di integrasikan ke dalam proyek 
    Anda melalui beberapa cara, seperti menggunakan <b>CDN</b> atau meng-instal melalui <b>NPM</b>.</p>
`