for(let i=1; i <= 10; i++) {
  console.log(i);
}

for(let i=0;i<=10;i+=2){
    console.log(i);
}

for(let i=1;i<=10;i+=2){
    console.log(i);
}

for(let i =1;i<=10;i++){
    if(i%2==0){
        console.log("Emre");
    }
    else{
        console.log("Merhaba");
    }
}

let toplam = 0;
for(let i=50;i>=1;i--){
    toplam+=i;
    console.log(i);
}
console.log("Toplam : "+toplam);