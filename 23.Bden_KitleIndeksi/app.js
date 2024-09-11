let kilo = Number(prompt("Kilonuzu GirinizÇ: "));
let boy = Number(prompt("Boyunuzu Metre cinsinden Giriniz: "));

let hesap = kilo /(boy**2);

if (hesap < 18.5) {
  console.log("ideal kilonun altındasınız!" + hesap);
} else if (hesap >= 18.5 && hesap <= 29.99) {
  console.log("ideal kilodasınız!" + hesap);
} else if (hesap >= 30.0 && hesap <= 40 ) {
  console.log("Obezsiniz" + hesap);
} else if (hesap >= 30) {
  console.log("morid obezsiniz" + hesap);
} else {
  console.log("Lütfen bilgilerinizi doğru giriniz!" + hesap);
}
