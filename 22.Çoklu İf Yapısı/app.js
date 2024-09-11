//? Çoklu if yapısıdır.

let ad = prompt("Adınızı Giriniz: ");
let tckimlik = prompt("TCKN giriniz: ");

kontrolet2(ad, tckimlik);
// kontrolEt(ad, tckimlik);
function kontrolEt(adi, tckn) {
  if (adi != "") {
    if (tckn.length == 11) {
      document.write(adi + "'lı kişinin tc'si : " + tckn);
    } else {
      alert("Lütfen 11 karakter giriniz!!!");
    }
  } else {
    alert("Lütfen adınızı giriniz!!!");
  }
}

function kontrolet2(adi, tckn) {
  if (adi == "") {
    console.log("Adınızı giriniz!");
    return;
  }
  if (tckn.length != 11) {
    console.log("TC nizi 11 karakterli giriniz!");
    return;
  }
  console.log("Başarılı bir şekilde girildi!");
}
