let sayi=Number(prompt("Lütfen bir sayı giriniz:"));
let sonuc =1;

for(let i = 1; i<=sayi; i++){
    sonuc*=i;

}
alert(sayi+"'nın faktöriyeli : "+sonuc+"dir.");