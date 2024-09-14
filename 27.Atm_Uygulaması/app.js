/*
?1-Bakiye Görüntüleme
?2-Para Çekme
?3-Para yatırma
?4-Çıkış

*ATM UYGULAMASI
 */

let bakiye=prompt("Lütfen bakiyenizi giriniz:");
let satir ="\r\n";
let metin ="ATM'ye Hoşgeldiniz!. "+satir
+"Bakiye Görüntülemek için 1"+satir
+"Para çekmek için 2"+satir
+"Para yatırmak için 3"+satir
+"Çıkış yapmak için 4 tuşlayınız.";

let girdi =prompt(metin);

switch(girdi){
    case "1":
        alert("Toplam bakiyeniz :"+bakiye);
        break;
    case "2":
        let eksi = prompt("Kaç tel çekmek istiyorsunuz?");
        bakiye -=eksi;
        alert(eksi+" TL para çekme işlemi gerçekleşti."+satir
            +"Kalan bakiye : "+bakiye
        );
    case "3":
        let arti = propmt("Kaç tl yatırmak istiyorsunuz?");
        bakiye+=arti;
        alert("Yatırılan Para: "+arti+satir
            +"Toplam Bakiye : "+bakiye
        );
    case "4":
        let sonuc=prompt("Gerçekten çıkmak istiyor musunuz?");
        if(sonuc =="evet"){
            alert("Çıkış yapıldı.");
        }
        else if(sonuc =="hayir"){
            "f'e basınız.";
        }
        break;
}