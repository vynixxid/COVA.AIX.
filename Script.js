// script.js

// Contoh interaksi dasar: alert saat klik tombol donasi
document.addEventListener("DOMContentLoaded", function () {
  const donasiLink = document.querySelector('footer a[href="#donasi"]');

  if (donasiLink) {
    donasiLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Terima kasih atas niat berdonasi! Fitur ini segera tersedia.");
    });
  }
});
