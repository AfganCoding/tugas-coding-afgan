
const express = require(`express`);
const app = express();
const port = 3000;


// 1. Mencetak Deret Fibonacci Tanpa Array
app.get(`/tugas/3a-fibonacci`, (req, res) => {
    let angkaSekarang = 0;
    let angkaSebelumnya = 1;
    let angkaSementara = 0;
    let i = 1;
    let hasil = ``;

    while (i <= 10) {
        hasil += angkaSekarang;

        if (i < 10) {
            hasil += `, `;
        }

        angkaSementara = angkaSekarang;
        angkaSekarang = angkaSekarang + angkaSebelumnya;
        angkaSebelumnya = angkaSementara;

        i++;
    }

    res.send(`Deret Fibonacci => ${hasil}`);
});


// 2. Pendeteksi Bilangan Prima
app.get(`/tugas/3b-bilangan-prima`, (req, res) => {
    const angkaUji = 7;
    let pembagi = 2;
    let bilanganPrima = true;

    while (pembagi < angkaUji) {
        if (angkaUji % pembagi === 0) {
            bilanganPrima = false;
            break;
        }

        pembagi++;
    }

    if (bilanganPrima && angkaUji > 1) {
        res.send(`Angka ${angkaUji} merupakan bilangan prima.`);
    } else {
        res.send(`Angka ${angkaUji} bukan bilangan prima.`);
    }
});


// 3. Membangun Pola Segitiga Siku-Siku Teks
app.get(`/tugas/3c-segitiga`, (req, res) => {
    const tinggiSegitiga = 5;
    let baris = 1;
    let hasil = ``;

    while (baris <= tinggiSegitiga) {
        let kolom = 1;
        let bintang = ``;

        while (kolom <= baris) {
            bintang += `*`;
            kolom++;
        }

        hasil += bintang + `<br>`;
        baris++;
    }

    res.send(hasil);
});


// 4. Simulasi Keamanan Login
app.get(`/tugas/3d-simulasi-login`, (req, res) => {
    const pinRahasia = `1234`;
    let jumlahPercobaan = 0;
    let aksesDiberikan = false;

    const tebakan1 = `1111`;
    const tebakan2 = `2222`;
    const tebakan3 = `1234`;

    let tebakan;

    do {
        jumlahPercobaan++;

        if (jumlahPercobaan === 1) {
            tebakan = tebakan1;
        } else if (jumlahPercobaan === 2) {
            tebakan = tebakan2;
        } else {
            tebakan = tebakan3;
        }

        if (tebakan === pinRahasia) {
            aksesDiberikan = true;
        }

    } while (aksesDiberikan === false && jumlahPercobaan < 3);

    if (aksesDiberikan) {
        res.send(`Akses diberikan.`);
    } else {
        res.send(`Akses Diblokir.`);
    }
});


// Menjalankan Server
app.listen(port, () => {
    console.log(`server jalan di http://localhost:` + port);
});
