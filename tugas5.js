
const express = require(`express`);
const app = express();
const port = 3000;


// 1. Kalkulator Faktorial Modular
app.get(`/tugas/5a-factorial-modular`, (req, res) => {
    function hitungFaktorial(angka) {
        let hasil = 1;
        let i = angka;
        let deret = [];

        while (i >= 1) {
            hasil *= i;
            deret.push(i);
            i--;
        }

        return {
            hasil: hasil,
            deret: deret.join(` * `)
        };
    }

    const angka = 4;
    const faktorial = hitungFaktorial(angka);

    res.send(`Faktorial ${angka}! => ${faktorial.deret} = ${faktorial.hasil}`);
});


// 2. Simulasi Hitung Mundur Sistem
app.get(`/tugas/5b-simulasi-hitung-mundur`, (req, res) => {
    function mulaiHitungMundur(waktuAwal) {
        let hasil = [];
        let angka = waktuAwal;

        do {
            hasil.push(angka);
            angka--;
        } while (angka >= 1);

        if (angka === 0) {
            hasil.push(`Sistem Dijalankan!`);
        } else {
            hasil.push(`Waktu tidak valid.`);
        }

        return hasil.join(`, `);
    }

    const waktuAwal = 5;
    const hasil = mulaiHitungMundur(waktuAwal);

    res.send(`Hitung Mundur: ${hasil}`);
});


// 3. Modul Kalkulator Mini
app.get(`/tugas/5c-kalkulator-mini`, (req, res) => {

    // Fungsi Penambahan (Arrow Function)
    const tambah = (a, b) => {
        return a + b;
    };

    // Fungsi Pengurangan (Function Expression)
    const kurang = function(a, b) {
        return a - b;
    };

    // Fungsi Perkalian (Statement Function)
    function kali(a, b) {
        return a * b;
    }

    // Fungsi Pembagian (Statement Function)
    function bagi(a, b) {
        if (b === 0) {
            return `Error: Tidak bisa dibagi dengan 0`;
        } else {
            return a / b;
        }
    }

    // Simulasi Perhitungan Beruntun
    const angka1 = 10;
    const angka2 = 5;

    const hasilTambah = tambah(angka1, angka2);
    const hasilKurang = kurang(hasilTambah, 3);
    const hasilKali = kali(hasilKurang, 2);
    const hasilBagi = bagi(hasilKali, 4);

    res.send(
        `Hasil Penambahan: ${hasilTambah}<br>` +
        `Hasil Pengurangan: ${hasilKurang}<br>` +
        `Hasil Perkalian: ${hasilKali}<br>` +
        `Hasil Pembagian: ${hasilBagi}`
    );
});


// Menjalankan Server
app.listen(port, () => {
    console.log(`server jalan di http://localhost:` + port);
});
