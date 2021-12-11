const person = {
    firstName: "Arta",
    lastName: "Tri Pamuda",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 60,
    height: 170,
    weightIdeal: function () {
        const heightMinus100 = this.height - 100
        return heightMinus100 - (heightMinus100 * 10 / 100);
    },
    goodEnough: function () {
        const isWeightIdeal = this.weightIdeal();
        if (isWeightIdeal - 5 > this.weight)
            return "Butuh protein lebih kurang " + (isWeightIdeal - this.weight) + " kg";
        else if (isWeightIdeal + 5 < this.weight)
            return "Yuk diet turunin " + (this.weight - isWeightIdeal) + " kg";
        return "Sudah ideal jaga tubuhmu ya";
    }
};

console.log(person.fullName());
console.log(person.weightIdeal());
console.log(person.goodEnough());
// const countries = {
//     ID: {
//         provinces: ["Jawa Timur", "Jawa Tengah", "Jawa Barat"],
//         cities: ["Kediri", "Solo", "Depok"]
//     },
//     MY: {

//     },
//     TH: {
//         provinces: []
//     },
// };

// console.log(countries?.TH?.provinces ?? "Not Found"); penggunaan optional chaining nullish