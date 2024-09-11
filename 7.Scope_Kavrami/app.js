/*
->--------Scope Kapsam--------
 ->Global Scope
 ->Function Scope
 ->Block Scope
*/

var a=5; //?global scope

if(true){

}

function method1(){
    console.log(a);
    document.write("merhabalar")
}

method1();

function method2(){
    var b =10;
}
console.log(a);
method(2);