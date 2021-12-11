// const buah = "Oranges";
// let namaBuah = "";

// switch (buah) {
//     case "Oranges":
//         namaBuah = "Orange";
//         break;
//     case "Semangka":
//         namaBuah = "Semangka";
//         break;
//     case "Durian":
//         namaBuah = "Durian";
//         break;
//     default:
//         break;
// }

// console.log(namaBuah);

const nomor = 1;

function pilihMakanan(nomor) {
    switch (nomor) {
        case 1:
            return "Soto";
        case 2:
            return "Mie Ayam";
        case 3:
            return "Nasi Goreng";
        case 4:
            return "Sate Kambing";
        default:
            return "Bakso";
    }
}

console.log(pilihMakanan(3));