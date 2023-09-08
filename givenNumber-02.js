const checkTypeNumber = (givenNumber) => {
    if (typeof givenNumber === 'undefined') {
        return "Error : Bro Where Is The Parameter";
    }
    if (typeof givenNumber !== 'number') {
        return "Error : Invalid Data Type.";
    }

    if (givenNumber % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
};
//ketika function tersebut dipanggil maka
console.log(checkTypeNumber(10)); // Output: "Genap"
console.log(checkTypeNumber(3));  // Output: "Ganjil"
console.log(checkTypeNumber("3")); // Output: "Error : Invalid Data Type"
console.log(checkTypeNumber({}));  // Output: "Error : Invalid Data Type"
console.log(checkTypeNumber([]));  // Output: "Error : Invalid Data Type"
console.log(checkTypeNumber());    // Output: "Error : Bro Where Is The Parameter"
