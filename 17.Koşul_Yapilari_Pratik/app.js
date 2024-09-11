// let not = prompt("Notunuzu giriniz : ");

// if(not>=50){
//     document.write("Tebrikler, geçtiniz. Notunuz : "+not);
// }else{
//     document.write("Malesef, kaldınız. Notunuz :" + not);
// }

let yas = prompt("Yaşınız : ");
let para =prompt("Paranız : ");

console.log(typeof yas);

if(yas >=18 && para >=3000){
    alert("Ehliyet sınavına girebilirsiniz.");
}
else{
    alert("Ehliyet  sınavına giremezsiniz.");
}
