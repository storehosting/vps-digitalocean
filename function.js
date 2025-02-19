javascript
// Fungsi untuk menampilkan pesan selamat datang
function welcomeMessage() {
    alert("Selamat datang di situs kami!");
}

// Fungsi untuk menambahkan dua angka
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Fungsi untuk mengubah teks pada elemen dengan ID tertentu
function changeText(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        console.error("Element dengan ID " + elementId + " tidak ditemukan.");
    }
}

// Fungsi untuk menampilkan informasi tentang pengguna
function displayUserInfo(name, age) {
    console.log("Nama: " + name + ", Umur: " + age);
}

// Fungsi untuk mengubah warna latar belakang pada klik
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Menghubungkan fungsi welcomeMessage ke event load
window.onload = function() {
    welcomeMessage();
}