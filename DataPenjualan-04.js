const dataPenjualanPakAldi = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    TotalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High - Original',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sneaker',
    TotalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Marron High - Original',
    hargaSatuan: 360000,
    kategori: 'Sepatu Sneaker',
    TotalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
    hargaSatuan: 120000,
    kategori: 'Sepatu Sneaker',
    TotalTerjual: 90,
  },
];

const getTotalPenjualan = (dataPenjualan) => {
  if (!Array(dataPenjualan)) {
    return "Error : Parameter bukan berupa array";
  }
  const totalPenjumlahan = dataPenjualan.reduce((acc, pcs) => {
    if (typeof pcs === 'object' && pcs.hasOwnProperty('TotalTerjual')) {
      return acc + pcs.TotalTerjual;
    }
    return acc;
  }, 0);

  return totalPenjumlahan;
};
const totalPenjualan = getTotalPenjualan(dataPenjualanPakAldi);
console.log(`Total penjualan sepatu: ${totalPenjualan}`);




















