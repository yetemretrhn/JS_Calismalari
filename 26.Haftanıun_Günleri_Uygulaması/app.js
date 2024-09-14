// let sayi = prompt("Lütfen 1 ile beş arasında bir sayı giriniz:");

// switch (sayi){
//     case "1":
//         console.log("Girilen sayı 1'dir.");
//         break;
//     case "2":
//         console.log("Girilen sayı 2'dir.");
//         break;
//     case "3":
//         console.log("Girilen sayı 3'tür.");
//         break;
//     case "4":
//         console.log("Girilen sayi 4'tür.");
//         break;
//     case "5":
//         console.log("Girilen sayı 5'tir");
//         break;
//     default:
//         console.log("Girilen sayı 1 ile 5 arasında olmalıdır.");
//         break;
// }

let satir ="\r\n";
let metin="1-Pazartesi"+satir
+"2-Salı"+satir
+"3-Çarşamba"+satir
+"4-Perşembe"+satir
+"5-Cuma"+satir
+"6-Cumartesi"+satir
+"7-Pazar"+satir
+"Günlerden birini seçiniz";

let deger =prompt(metin);
switch(deger){
    case"1":
        console.log("Pazartesi");
        break;
    case "2":
        console.log("Salı");
        break;
    case "3":
        console.log("Çarşamba");
        break;
    case "4":
        console.log("perşembe");
        break;
    case "5":
        console.log("cuma");
        break;
    case "6":
        console.log("cumartesi");
        break;
    case "7":
        console.log("pazar");
        break;
    default:
        console.log("Girilen sayı 1 ile 5 arasında olmalıdır!");
        break;
}

