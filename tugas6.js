
const express = require('express');
const app = express();
const port = 3000;

// ==========================================
// 1. PENDETEKSI BILANGAN PRIMA
// ==========================================

// Fungsi untuk mengecek bilangan prima
function cekPrima(n) {
    if (n < 2) {
        return false;
    }

    let pembagi = 2;

    while (pembagi < n) {
        if (n % pembagi === 0) {
            return false;
        }
        pembagi++;
    }

    return true;
}

// Fungsi untuk mencetak deret bilangan prima
function cetakDeretPrima(batas) {
    let angka = 2;
    let hasil = "";

    while (angka < batas) {
        if (cekPrima(angka)) {
            hasil += angka + ", ";
        }
        angka++;
    }

    return hasil.slice(0, -2);
}

app.get('/tugas/6a-bilangan-prima', (req, res) => {
    let batas = 20;
    let hasil = cetakDeretPrima(batas);

    res.send(`Deret bilangan prima kurang dari ${batas}: ${hasil}`);
});


// ==========================================
// 2. DERET FIBONACCI MODULAR TANPA ARRAY
// ==========================================

function cetakFibonacci(jumlahSuku) {
    let current = 0;
    let previous = 1;
    let temp;
    let hitung = 0;
    let hasil = "";

    while (hitung < jumlahSuku) {
        hasil += current + ", ";

        temp = current + previous;
        current = previous;
        previous = temp;

        hitung++;
    }

    return hasil.slice(0, -2);
}

app.get('/tugas/6b-fibonacci', (req, res) => {
    let jumlahSuku = 10;
    let hasil = cetakFibonacci(jumlahSuku);

    res.send(`Deret Fibonacci: ${hasil}`);
});


// ==========================================
// 3. SIMULASI MESIN ATM SEDERHANA
// ==========================================

// Fungsi untuk mengecek saldo
function cekSaldo(saldo) {
    return `Saldo saat ini: Rp${saldo.toLocaleString('id-ID')}`;
}

// Fungsi untuk menarik tunai
function tarikTunai(saldo, jumlah) {
    if (saldo >= jumlah && jumlah > 0) {
        saldo = saldo - jumlah;
        return {
            saldo: saldo,
            pesan: `Penarikan Rp${jumlah.toLocaleString('id-ID')} berhasil.`
        };
    } else {
        return {
            saldo: saldo,
            pesan: "Penarikan gagal! Saldo tidak mencukupi atau jumlah tidak valid."
        };
    }
}

// Fungsi untuk setor tunai
function setorTunai(saldo, jumlah) {
    if (jumlah > 0) {
        saldo = saldo + jumlah;
        return {
            saldo: saldo,
            pesan: `Setor tunai Rp${jumlah.toLocaleString('id-ID')} berhasil.`
        };
    } else {
        return {
            saldo: saldo,
            pesan: "Setor tunai gagal! Jumlah harus lebih dari 0."
        };
    }
}

app.get('/tugas/6c-atm-sederhana', (req, res) => {
    let saldoTabungan = 100000;
    let hasil = "";

    hasil += cekSaldo(saldoTabungan) + "<br><br>";

    // Transaksi pertama: setor tunai
    let transaksi1 = setorTunai(saldoTabungan, 50000);
    saldoTabungan = transaksi1.saldo;
    hasil += transaksi1.pesan + "<br>";
    hasil += cekSaldo(saldoTabungan) + "<br><br>";

    // Transaksi kedua: tarik tunai
    let transaksi2 = tarikTunai(saldoTabungan, 30000);
    saldoTabungan = transaksi2.saldo;
    hasil += transaksi2.pesan + "<br>";
    hasil += cekSaldo(saldoTabungan) + "<br><br>";

    // Transaksi ketiga: tarik melebihi saldo
    let transaksi3 = tarikTunai(saldoTabungan, 200000);
    saldoTabungan = transaksi3.saldo;
    hasil += transaksi3.pesan + "<br>";
    hasil += cekSaldo(saldoTabungan) + "<br><br>";

    hasil += `<b>Saldo akhir: Rp${saldoTabungan.toLocaleString('id-ID')}</b>`;

    res.send(hasil);
});


// ==========================================
// MENJALANKAN SERVER
// ==========================================

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
