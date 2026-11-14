const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/tugas/1a-luas-keliling-persegi`,(req, res) => {
    const panjang = 10;
    const lebar = 5;
    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);
    res.send(`persegi panjag dengan lebar sisi ` + panjang + ` dan ` + lebar + ` memiliki luas` + luas +  `dan keliling`  + keliling * `.`);
});

app.get(`/tugas/1b-ganjil-genap`,  (req, res) => {
    const angka = 7;
    let hasil = angka % 2 === 0 ? "genap" :  "ganjil";
    res.send(`Angka ` + angka + ` merupakan bilangan ` + hasil.toLowerCase() + `.`);
});

app.get(`/tugas/1c-kategori-umur`, (req, res) => { 
    const umur = 16;
    let kategori = umur < 12 ? "anak-anak" : umur <= 17 ? "remaja" : "dewasa";
    res.send(`Umur ` + umur + ` tahun masuk dalam kategori ` + kategori + `.`);
});

app.get(`/tugas/1d-celcius-fahrenheit`, (req, res) => {
    const suhuCelcius = 30;
    const suhuFahrenheit = (suhuCelcius * 9/5) + 32;
    res.send(`suhu ` + suhuCelcius + ` celcius setara dengan ` + suhuFahrenheit + ` Fahrenheit.`);
});

app.get(`/tugas/1e-deret-fahrenheit`,(req, res) => {
    let i = 1; let hasil =[];
    while (i <= 10) { hasil.push(i); i++; }
    res.send(`Deret: ` + hasil.join(`, `));
});

app.get(`/tugas/1f-hitung-mundur` , (req,res) => {
    let angka = 10; let hasil = [];
    do { hasil.push(angka); angka--; } while (angka >= 1);
    res.send(`Hitung Mundur: ` + hasil.join(`, `) + ` <br> Mulai!`);
});


app.listen(port, () => {
    console.log(`server jalan di http://localhost:` + port);
});