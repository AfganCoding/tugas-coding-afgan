
const express = require(`express`);
const app = express();
const port = 3000;


// 1. Fungsi Sapaan (Arrow Function)
app.get(`/tugas/4a-sapaan`, (req, res) => {
    const sapaan = (nama) => {
        return `Halo, ${nama}!`;
    };

    const hasil = sapaan(`Budi`);

    res.send(hasil);
});


// 2. Kalkulator Luas Persegi Panjang (Statement Function)
app.get(`/tugas/4b-luas-persegi-panjang`, (req, res) => {
    function hitungLuas(panjang, lebar) {
        return panjang * lebar;
    }

    const panjang = 10;
    const lebar = 5;
    const luas = hitungLuas(panjang, lebar);

    res.send(`Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luas}.`);
});


// 3. Konversi Suhu (Function Expression)
app.get(`/tugas/4c-konversi-suhu`, (req, res) => {
    const konversiCelciusKeFahrenheit = function(celcius) {
        return (celcius * 9 / 5) + 32;
    };

    const celcius = 30;
    const fahrenheit = konversiCelciusKeFahrenheit(celcius);

    res.send(`Suhu ${celcius} Celcius setara dengan ${fahrenheit} Fahrenheit.`);
});


// 4. Pengecekan Bilangan Genap/Ganjil
app.get(`/tugas/4d-ganjil-genap`, (req, res) => {
    function cekBilangan(angka) {
        if (angka % 2 === 0) {
            return `Genap`;
        } else {
            return `Ganjil`;
        }
    }

    const angka = 7;
    const hasil = cekBilangan(angka);

    res.send(`Angka ${angka} merupakan bilangan ${hasil}.`);
});


// Menjalankan Server
app.listen(port, () => {
    console.log(`server jalan di http://localhost:` + port);
});
