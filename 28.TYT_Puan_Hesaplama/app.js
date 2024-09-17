/*
?Sorular
!1- Türkçe 40,
!2- Matematik 40,
!3- Sosyal Bilimler 20,
!4- Fen Bilimleri 20

*----> 100 puanı ÖSYM veriyor.
*----> Okul puan maksimum 60 puan olarak veriliyor.
*/

let satir = "\r\n";
let mesaj = "TYT PUAN HESAPLAMAYA HOŞ GGELDİNİZ."+satir
+"Puan hesaplamak için 1"+satir
+"Çıkış yapmak için 2 ye basınız";

let turkceDogru, turkceYanlis = 0;
let matDogru, matYabnlis = 0;
let sosDogru, sosYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan =0;
let secim = prompt(mesaj);

switch(secim){
 case "1":

    let okulPuan = prompt("Okul puanınızı giriniz: ");
    okulPuan =okulPuan*3/5;

    turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz: "));
    turkceYanlis = Number(prompt("Türkçe Yanlış sayınızı giriniz : "));
    
    matDogru = Number(prompt("Mat doğru sayınızı giriniz"));
    matYanlis = Number(prompt("Mat yanlış sayınızı giriniz:"));

    sosDogru = Number(prompt("Sosyal doğru sayınızı giriniz: "));
    sosYanlis = Number(prompt("Sosyal yanlış sayınızı giriniz:"));

    fenDogru = Number(prompt("Fen doğru sayınızı giriniz: "));
    fenYanlis = Number(prompt("Fen yanlış sayınızı giriniz"));

    let dogru = matDogru+sosDogru+fenDogru+turkceDogru;
    let yanlis = turkceYanlis+matYanlis+sosYanlis+fenYanlis;
    let puan = (4*(dogru - (yanlis/4)))+okulPuan+100 ;
    alert("Puanınız : "+puan);
    break;
    case "2":
        alert("Çıkış yapıldı");
        break;
    default:
        alert("Lütfen 1 ya da 2 seçiniz!");
        break;
}

