// let sayac = 1;
// do{
//     console.log(sayac);
//     sayac++;
// }while(sayac<=10);

// yas = 23;

// do{
//     console.log("Ehliyeti Al");
// }while(yas>=25); 
let toplam=0;
let sayac = 1;
do{
    if(sayac%2==1){
        console.log(sayac);
        toplam+=sayac;
    }
    sayac++;
}while(sayac<=10);

console.log(toplam);
