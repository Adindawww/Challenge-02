const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

function getAngkaTerbesarKedua(a, b) {
    return b - a;
}

dataAngka.sort(getAngkaTerbesarKedua);


console.log(dataAngka);
console.log('angka terbesar kedua:', dataAngka[1]);