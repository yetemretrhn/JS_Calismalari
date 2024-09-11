

function selamVer(){
    var a="Herkese selam";
    console.log(a);
    if(true){
     
        var emre = "emre";
    }
    console.log(emre); //var olduğu için block scope içinde olsa dahi foknksiyondan erşebiliyoruz.
}

selamVer();

function selamVer2(){
    var a="Herkese selam";
    console.log(a);
    if(true){
     
        let emre = "emre";
        console.log(emre); // let ve const'ta sadece block scope içinden erişilebilir.
    }

}

selamVer2();


let sayi1=5;
sayi1=10;
console.log(sayi1); // Burada letin değerini değiştirebiliriz.

var sayi2=10;
var sayi2=20;
console.log(sayi2); // burada var ile sonradan tekrar aynı isimle değişken ataması yapabiliriz.

const userentity ={
name:"emre",
pass:"deneme"    
}

userentity.name="emreturhan";
console.log(userentity);
