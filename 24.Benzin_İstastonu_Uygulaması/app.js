let benzin = 41.55, dizel=41.74,lpg=25.13;

let satir = "\r\n";

let secim = prompt("Lütfen almak istediğiniz yakıtı seçiniz" + satir
    +"1.Dizel : "+ dizel + satir 
    +"2.Benzin : "+ benzin + satir
    +"3.LPG : "+lpg
);

if(secim =="1" || secim =="2" || secim =="3"){
    let litre = Number(prompt("Lütfen kaç litre alacağınızı giriniz: "));
    let bakiye = Number(prompt("Lütfen bakiyenizi giriniz: "));

    if(secim =="1"){
        let odenecektutar = dizel*litre;
        let yakit = "dizel";
        if(odenecektutar<bakiye){
        bakiye-=odenecektutar;
        alert("Yakıt alma işlemi başarılı."+ satir
            +"Ödenen Tutar: "+odenecektutar+satir
            +"Kalan bakiye : "+bakiye +satir
            +"Alınan Litre:"+litre+satir
            +"Alınan Yakıt :"+yakit
        );
        }else{
            //para yetersiz
            alert("Bakiyeniz yeterli değildir."+satir
                +"Ödenecek tutar : "+odenecektutar+satir
                +"Bakiye"+bakiye+satir
                +"Eksik Tutar: "+(odenecektutar-bakiye)+satir
                +"Litre:"+litre
            );
        }
        }else if(secim == "2"){
            let odenecektutar = benzin*litre;
        let yakit = "benzin";
        if(odenecektutar<bakiye){
        bakiye-=odenecektutar;
        alert("Yakıt alma işlemi başarılı."+ satir
            +"Ödenen Tutar: "+odenecektutar+satir
            +"Kalan bakiye : "+bakiye +satir
            +"Alınan Litre:"+litre+satir
            +"Alınan Yakıt :"+yakit
        );
        }else{
            //para yetersiz
            alert("Bakiyeniz yeterli değildir."+satir
                +"Ödenecek tutar : "+odenecektutar+satir
                +"Bakiye"+bakiye+satir
                +"Eksik Tutar: "+(odenecektutar-bakiye)+satir
                +"Litre:"+litre
            );
        }
        }else if(secim == "3"){
            let odenecektutar = lpg*litre;
        let yakit = "lpg";
        if(odenecektutar<bakiye){
        bakiye-=odenecektutar;
        alert("Yakıt alma işlemi başarılı."+ satir
            +"Ödenen Tutar: "+odenecektutar+satir
            +"Kalan bakiye : "+bakiye +satir
            +"Alınan Litre:"+litre+satir
            +"Alınan Yakıt :"+yakit
        );
        }else{
            //para yetersiz
            alert("Bakiyeniz yeterli değildir."+satir
                +"Ödenecek tutar : "+odenecektutar+satir
                +"Bakiye"+bakiye+satir
                +"Eksik Tutar: "+(odenecektutar-bakiye)+satir
                +"Litre:"+litre
            );
        }
        }

}
else{
    alert("Lütfen geçerli değeri seçiniz!");
}


