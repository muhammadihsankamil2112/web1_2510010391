document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-pesan");
  const hasil = document.getElementById("hasil-pesan");
  const ringkasan = document.getElementById("ringkasan");
  const tautanWA = document.getElementById("tautan-wa");

  // Nomor WhatsApp penjual (ganti dengan nomor yang benar, format 62...)
  const NOMOR_PENJUAL = "6281234567890";

  function tampilError(id, pesan) {
    const el = document.getElementById(id);
    if (el) el.textContent = pesan;
  }

  function bersihkanError() {
    document.querySelectorAll(".pesan-error").forEach(function (el) {
      el.textContent = "";
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // cegah halaman reload
    bersihkanError();

    const nama = form.nama.value.trim();
    const wa = form.wa.value.trim();
    const email = form.email.value.trim();
    const produk = form.produk.value;
    const jumlah = parseInt(form.jumlah.value, 10);
    const pengambilan = form.pengambilan.value;
    const catatan = form.catatan.value.trim();
    const setuju = form.setuju.checked;

    let valid = true;

    if (nama.length < 3) {
      tampilError("error-nama", "Nama minimal 3 karakter.");
      valid = false;
    }

    if (!/^08[0-9]{8,11}$/.test(wa)) {
      tampilError("error-wa", "Nomor WhatsApp harus diawali 08 dan 10–13 digit.");
      valid = false;
    }

    if (email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tampilError("error-email", "Format surel tidak valid.");
      valid = false;
    }

    if (produk === "") {
      tampilError("error-produk", "Silakan pilih produk.");
      valid = false;
    }

    if (isNaN(jumlah) || jumlah < 1 || jumlah > 50) {
      tampilError("error-jumlah", "Jumlah harus antara 1 sampai 50.");
      valid = false;
    }

    if (!setuju) {
      tampilError("error-setuju", "Anda harus menyetujui sebelum mengirim.");
      valid = false;
    }

    if (!valid) {
      hasil.hidden = true;
      return;
    }

    // Susun teks ringkasan
    const teks =
      "Nama        : " + nama + "\n" +
      "WhatsApp    : " + wa + "\n" +
      "Surel       : " + (email || "-") + "\n" +
      "Produk      : " + produk + "\n" +
      "Jumlah      : " + jumlah + "\n" +
      "Pengambilan : " + pengambilan + "\n" +
      "Catatan     : " + (catatan || "-");

    ringkasan.textContent = teks;

    // Pesan untuk WhatsApp
    const pesanWA =
      "Halo Sasirangan Banua, saya ingin memesan:\n\n" + teks;
    tautanWA.href =
      "https://wa.me/" + NOMOR_PENJUAL + "?text=" + encodeURIComponent(pesanWA);

    // Tampilkan kotak ringkasan
    hasil.hidden = false;
    hasil.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});