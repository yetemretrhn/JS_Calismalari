//? Vize1 %30 , vize2 %30 , final %40 etkilesin.

let vize1 = Number(prompt("Vize1'i giriniz:"));
let vize2 = Number(prompt("Vize2'i giriniz:"));
let final = Number(prompt("Final'i Giriniz:"));

let ortalama;

ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

if(ortalama<60){
    alert("Bu dersten dönemden kaldınız!" + "Notunuz : "+ ortalama);
}
else{
    alert("Tebrikler dersten geçtiniz." + "Notunuz : "+ ortalama);

}