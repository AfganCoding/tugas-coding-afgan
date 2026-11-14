
const express = require(`express`);
const app = express();
const port = 3000;

// 1. Mencari Angka Terbesar dari Tiga Nilai
app.get(`/tugas/2a-angka-terbesar`, (req, res) => {
    const angka1 = 15;
    const angka2 = 25;
    const angka3 = 10;

    let terbesar;

    if (angka1 >= angka2 && angka1 >= angka3) {
        terbesar = angka1;
    } else if (angka2 >= angka1 && angka2 >= angka3) {
        terbesar = angka2;
    } else {
        terbesar = angka3;
    }

    res.send(`Dari angka ${angka1}, ${angka2}, dan ${angka3}, yang paling besar angka ${terbesar}.`);
});


// 2. Akumulator Penjumlahan Deret (Sum of N)
app.get(`/tugas/2b-sum-of-n`, (req, res) => {
    const batasAkhir = 5;
    let total = 0;
    let i = 1;
    let deret = [];

    while (i <= batasAkhir) {
        total += i;
        deret.push(i);
        i++;
    }

    res.send(`Sum of ${batasAkhir} => ${deret.join(` + `)} = ${total}`);
});


// 3. Kalkulator Tahun Kabisat
app.get(`/tugas/2c-kabisat`, (req, res) => {
    const tahun = 2024;

    if (tahun % 400 === 0 || (tahun % 4 === 0 && tahun % 100 !== 0)) {
        res.send(`Tahun ${tahun} merupakan tahun kabisat.`);
    } else {
        res.send(`Tahun ${tahun} bukan tahun kabisat.`);
    }
});


// 4. Simulasi FizzBuzz Sederhana
app.get(`/tugas/2d-fizzbuzz`, (req, res) => {
    let angka = 1;
    let hasil = [];

    while (angka <= 20) {
        if (angka % 3 === 0 && angka % 5 === 0) {
            hasil.push(`FizzBuzz`);
        } else if (angka % 3 === 0) {
            hasil.push(`Fizz`);
        } else if (angka % 5 === 0) {
            hasil.push(`Buzz`);
        } else {
            hasil.push(angka);
        }

        angka++;
    }

    res.send(`Hasil FizzBuzz:<br>${hasil.join(`, `)}`);
});


// 5. Menghitung Nilai Faktorial
app.get(`/tugas/2e-faktorial`, (req, res) => {
    const n = 4;
    let hasilFaktorial = 1;
    let i = n;
    let deret = [];

    do {
        hasilFaktorial *= i;
        deret.push(i);
        i--;
    } while (i >= 1);

    res.send(`Faktorial ${n} => ${deret.join(` * `)} = ${hasilFaktorial}`);
});


// Menjalankan Server
app.listen(port, () => {
    console.log(`server jalan di http://localhost:` + port);
});
