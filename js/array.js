const namaMobil = ["BMW", "Mercedes", "Mazda", "Honda"];

//var.length untuk menampilkan banyaknya data didalam array

// namaMobil.forEach(function (item, index, array) {
//     console.log(item, index);
// });

//namaMobil.indexOf("Mercedes"); untuk menampilkan index dari variable "Mercedes"
//namaMobil.push("Mitsubishi"); untuk menambah data "Mitsubishi" ke dalam array namaMobil
// namaMobil.pop(); untuk menghapus data terakhir pada suatu array
// namaMobil.shift(); untuk menghapus data pertama pada suatu array

// const indexBuang = namaMobil.indexOf("Honda");
// namaMobil.splice(indexBuang, 1);
//untuk menghapus index dengan nama Honda

// console.log(
//     namaMobil.reduce(function(acc, mobil, ke) {
//         acc[mobil] = `Mobil ke ${ke+1}`;

//         return acc;
//     }, {})["Honda"]
// );

//perulangan for

// for (let index = 0; index < namaMobil.length; index++) {
//     const element = namaMobil[index];

//     console.log(element);

// }

//perulangan while

// let index = 0;

// while (index < namaMobil.length) {
//     const element = namaMobil[index];
//     console.log(element);
//     index++;

// }

console.log(namaMobil.filter(function (item, index) {
    return item != "Honda";
}).map(function (item, index) {
    return `${item} adalah mobil ke ${index + 1}`;
}).join(", ")
);