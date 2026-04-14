// Menghitung luas persegi panjang
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

// Menampilkan hasil ke console
function tampilkanHasil(luas) {
    console.log("Hasilnya adalah: " + luas);
}

// Simulasi menyimpan data
function simpanData() {
    console.log("Data disimpan...");
}

// Program utama
function main() {
    const panjang = 10;
    const lebar = 5;

    const luas = hitungLuas(panjang, lebar);
    tampilkanHasil(luas);
    simpanData();
}

main();

console.log("Ini fitur baru dari branch");