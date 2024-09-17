//Armstrong sayısı her rakamının küpünün toplanması sonucu kendisinin elde edilen sayıdır.

let sayi=prompt("Lütfen sayı giriniz:");
let toplam=0;
for(let i = 0; i<sayi.length;i++){
    let rakam = sayi.charAt(i);
    console.log(typeof rakam);
    toplam+=rakam**3;
    console.log(typeof toplam);
}
if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır :)");
}
else{
    alert("Armstrong sayısı değildir");
}