const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang-Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiera Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    }
];
function menghitungTotalKeuntungan(dataPenjualanNovel) {
    let totalKeuntungan = 0;
    for (let Novel of dataPenjualanNovel) {
        totalKeuntungan += (Novel.hargaJual - Novel.hargaBeli) * Novel.totalTerjual;
    }
    return totalKeuntungan;
}
function menghitungTotalModal(dataPenjualanNovel) {
    let totalModal = 0;
    for (let Novel of dataPenjualanNovel) {
        totalModal += Novel.hargaBeli;
    }
    return totalModal;
}

function mencariProdukNovelTerlaris(dataPenjualanNovel) {
    let produkTerlaris = dataPenjualanNovel[0];
    for (let Novel of dataPenjualanNovel) {
        if (Novel.totalTerjual > produkTerlaris.totalTerjual) {
            produkTerlaris = Novel;
        }
    }
    return produkTerlaris;
}
function menghitungPersentaseKeuntungan(dataPenjualanNovel) {
    const totalKeuntungan = menghitungTotalKeuntungan(dataPenjualanNovel);
    const totalModal = menghitungTotalModal(dataPenjualanNovel);
    const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    return persentaseKeuntungan.toFixed(1);
}
function mencariPenulisTerlaris(dataPenjualanNovel) {
    const penulisCounter = {};
    let penulisTerlaris = "";
    let maxJumlahNovel = 0;

    for (let Novel of dataPenjualanNovel) {
        if (penulisCounter[Novel.penulis]) {
            penulisCounter[Novel.penulis]++;
        } else {
            penulisCounter[Novel.penulis] = 1;
        }

        if (penulisCounter[Novel.penulis] > maxJumlahNovel) {
            penulisTerlaris = Novel.penulis;
            maxJumlahNovel = penulisCounter[Novel.penulis];
        }
    }
    return penulisTerlaris;
}

console.log("Total Keuntungan: Rp" + menghitungTotalKeuntungan(dataPenjualanNovel).toLocaleString("id-ID"));
console.log("Total Modal: Rp" + menghitungTotalModal(dataPenjualanNovel).toLocaleString("id-ID"));
console.log("Produk Novel Terlaris: " + mencariProdukNovelTerlaris(dataPenjualanNovel).namaProduk);
console.log("Persentase Keuntungan: " + menghitungPersentaseKeuntungan(dataPenjualanNovel) + "%");
console.log("Penulis Terlaris: " + mencariPenulisTerlaris(dataPenjualanNovel));