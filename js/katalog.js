// ============================================================
// katalog.js — Modul 3: menampilkan katalog dengan DOM
// Praktikum Pemrograman Web 1 · Sasirangan Banua
// ============================================================

// 1. Data katalog: array yang berisi objek-objek produk (20 item)
const katalog = [
  {
    id: 1,
    nama: "Kain Motif Gigi Haruan",
    kategori: "kain",
    harga: 185000,
    gambar: "img/gigi-haruan.svg",
    deskripsi: "Kain katun 2 meter bermotif zig-zag menyerupai gigi ikan haruan.",
  },
  {
    id: 2,
    nama: "Kain Motif Kambang Kacang",
    kategori: "kain",
    harga: 175000,
    gambar: "img/kambang-kacang.svg",
    deskripsi: "Motif bunga kacang yang melambangkan keakraban dan kerukunan.",
  },
  {
    id: 3,
    nama: "Selendang Iris Pudak",
    kategori: "aksesoris",
    harga: 120000,
    gambar: "img/iris-pudak.svg",
    deskripsi: "Selendang ringan bermotif irisan daun pudak (pandan).",
  },
  {
    id: 4,
    nama: "Kain Motif Bayam Raja",
    kategori: "kain",
    harga: 190000,
    gambar: "img/bayam-raja.svg",
    deskripsi: "Motif daun bayam yang melambangkan kesuburan dan kemakmuran.",
  },
  {
    id: 5,
    nama: "Kain Motif Hiris Gagatas",
    kategori: "kain",
    harga: 170000,
    gambar: "img/hiris-gagatas.svg",
    deskripsi: "Garis diagonal tegas dengan warna kontras, cocok untuk busana harian.",
  },
  {
    id: 6,
    nama: "Kain Motif Naga Balimbur",
    kategori: "kain",
    harga: 250000,
    gambar: "img/naga-balimbur.svg",
    deskripsi: "Motif naga bergelombang yang melambangkan kekuatan dan kewibawaan.",
  },
  {
    id: 7,
    nama: "Kain Motif Ombak Sinapur Karang",
    kategori: "kain",
    harga: 195000,
    gambar: "img/ombak-sinapur-karang.svg",
    deskripsi: "Gelombang berlapis yang terinspirasi dari ombak sungai Martapura.",
  },
  {
    id: 8,
    nama: "Kain Motif Kembang Tampuk Manggis",
    kategori: "kain",
    harga: 180000,
    gambar: "img/kembang-tampuk-manggis.svg",
    deskripsi: "Bunga tampuk manggis dengan kelopak melingkar yang manis.",
  },
  {
    id: 9,
    nama: "Kain Motif Sarigading",
    kategori: "kain",
    harga: 210000,
    gambar: "img/sarigading.svg",
    deskripsi: "Pola belah ketupat klasik yang sering dipakai pada acara adat.",
  },
  {
    id: 10,
    nama: "Kain Motif Daun Katu",
    kategori: "kain",
    harga: 165000,
    gambar: "img/daun-katu.svg",
    deskripsi: "Motif daun katu yang dipercaya membawa kesehatan dan keselamatan.",
  },
  {
    id: 11,
    nama: "Kain Motif Kangkung Kaumbakan",
    kategori: "kain",
    harga: 172000,
    gambar: "img/kangkung-kaumbakan.svg",
    deskripsi: "Pola spiral sulur kangkung yang mengalir lembut.",
  },
  {
    id: 12,
    nama: "Kain Motif Bintang Bahambur",
    kategori: "kain",
    harga: 200000,
    gambar: "img/bintang-bahambur.svg",
    deskripsi: "Taburan bintang di atas kain biru malam yang elegan.",
  },
  {
    id: 13,
    nama: "Kain Motif Kulit Kerang",
    kategori: "kain",
    harga: 168000,
    gambar: "img/kulit-kerang.svg",
    deskripsi: "Susunan sisik melengkung menyerupai kulit kerang.",
  },
  {
    id: 14,
    nama: "Syal Dara Manginang",
    kategori: "aksesoris",
    harga: 135000,
    gambar: "img/dara-manginang.svg",
    deskripsi: "Syal berbintik warna hangat, nyaman untuk gaya santai maupun formal.",
  },
  {
    id: 15,
    nama: "Laung Pangantin",
    kategori: "aksesoris",
    harga: 95000,
    gambar: "img/laung-pangantin.svg",
    deskripsi: "Ikat kepala bermotif belah ketupat untuk pakaian adat Banjar.",
  },
  {
    id: 16,
    nama: "Tas Tote Sasirangan",
    kategori: "aksesoris",
    harga: 145000,
    gambar: "img/tas-tote.svg",
    deskripsi: "Tas tote kanvas dengan panel sasirangan bermotif bintang.",
  },
  {
    id: 17,
    nama: "Dompet Koin Sasirangan",
    kategori: "aksesoris",
    harga: 45000,
    gambar: "img/dompet-koin.svg",
    deskripsi: "Dompet koin mungil dengan resleting, cocok untuk oleh-oleh.",
  },
  {
    id: 18,
    nama: "Sarung Bantal Kambang",
    kategori: "aksesoris",
    harga: 85000,
    gambar: "img/sarung-bantal.svg",
    deskripsi: "Sarung bantal sasirangan untuk mempercantik ruang tamu.",
  },
  {
    id: 19,
    nama: "Taplak Meja Sasirangan",
    kategori: "aksesoris",
    harga: 155000,
    gambar: "img/taplak-meja.svg",
    deskripsi: "Taplak meja persegi bermotif garis yang hangat dan rapi.",
  },
  {
    id: 20,
    nama: "Gantungan Kunci Sulur",
    kategori: "aksesoris",
    harga: 25000,
    gambar: "img/gantungan-kunci.svg",
    deskripsi: "Gantungan kunci kecil berbahan sasirangan, harga ramah di kantong.",
  },
];

// 2. Ambil elemen-elemen HTML yang akan dimanipulasi
const daftarKatalog = document.querySelector("#daftar-katalog");
const inputCari = document.querySelector("#cari");
const tombolFilter = document.querySelectorAll(".tombol-filter");
const infoJumlah = document.querySelector("#info-jumlah");

// 3. Status filter yang sedang aktif
let kategoriAktif = "semua";

// 4. Mengubah angka menjadi format Rupiah, contoh: 185000 -> "Rp 185.000"
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

// 5. Membuat elemen <article> untuk satu produk
function buatKartu(produk) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const gambar = document.createElement("img");
  gambar.src = produk.gambar;
  gambar.alt = produk.nama;
  gambar.width = 600;
  gambar.height = 400;
  gambar.loading = "lazy";

  const isi = document.createElement("div");
  isi.className = "kartu-isi";

  const label = document.createElement("span");
  label.className = "label-kategori";
  label.textContent = produk.kategori;

  const judul = document.createElement("h3");
  judul.textContent = produk.nama;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = produk.deskripsi;

  const harga = document.createElement("p");
  harga.className = "harga";
  harga.textContent = formatRupiah(produk.harga);

  isi.append(label, judul, deskripsi, harga);
  kartu.append(gambar, isi);
  return kartu;
}

// 6. Menampilkan sekumpulan produk ke dalam #daftar-katalog
function tampilkanKatalog(daftarProduk) {
  daftarKatalog.replaceChildren(); // kosongkan isi sebelumnya

  if (daftarProduk.length === 0) {
    const kosong = document.createElement("p");
    kosong.textContent = "Produk tidak ditemukan. Coba kata kunci lain.";
    daftarKatalog.append(kosong);
  }

  daftarProduk.forEach((produk) => {
    daftarKatalog.append(buatKartu(produk));
  });

  infoJumlah.textContent = `Menampilkan ${daftarProduk.length} dari ${katalog.length} produk`;
}

// 7. Menyaring katalog berdasarkan kata kunci DAN kategori aktif
function saringKatalog() {
  const kataKunci = inputCari.value.trim().toLowerCase();

  const hasil = katalog.filter((produk) => {
    const cocokKategori = kategoriAktif === "semua" || produk.kategori === kategoriAktif;
    const cocokKata =
      produk.nama.toLowerCase().includes(kataKunci) ||
      produk.deskripsi.toLowerCase().includes(kataKunci);
    return cocokKategori && cocokKata;
  });

  tampilkanKatalog(hasil);
}

// 8. Event: setiap kali pengguna mengetik di kotak pencarian
inputCari.addEventListener("input", saringKatalog);

// 9. Event: klik tombol filter kategori
tombolFilter.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    kategoriAktif = tombol.dataset.kategori;

    // perbarui tampilan tombol: hanya satu yang aktif
    tombolFilter.forEach((t) => {
      t.classList.remove("aktif");
      t.setAttribute("aria-pressed", "false");
    });
    tombol.classList.add("aktif");
    tombol.setAttribute("aria-pressed", "true");

    saringKatalog();
  });
});

// 10. Tampilkan semua produk ketika halaman pertama kali dibuka
tampilkanKatalog(katalog);