//fungsi yang digunakan untuk mengganti sebuah kata dengan menggunakan 3 parameter
function changeWord(selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
}

const kalimatSatu = "Annisa Suka makan bakso";
const kalimatDua = "Adinda sangat membencimu selamanya";

// ketika function ini dipanggil dengan variabel kalimatSatu
// maka output yang akan muncul adalah Annisa suka makan sate
console.log(changeWord("bakso", "sate", kalimatSatu));

// ketika function ini dipanggil dengan variabel kalimatDua
// maka output yang akan muncul adalah Adinda sangat menyayangimu selamanya
console.log(changeWord("membencimu", "menyayangimu", kalimatDua));
