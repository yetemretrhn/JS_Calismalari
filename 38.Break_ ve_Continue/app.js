//? break ve continue 

//!1den 10'a kadar olan sayıları yazdırma break kullanımı.

// let sayac=1;
// while(sayac<=10){
  
//     if(sayac==8){
//         break;
//     }
//     console.log(sayac);
//     sayac++;
// }

//?continue -> döngüyü bir kereye mahsus kırar.

let sayac = 0;
while(sayac<=10){
    sayac++;
    if(sayac==9){
        continue;
    }
    console.log(sayac);
}

console.log("emre");