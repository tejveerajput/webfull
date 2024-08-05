


// var a=20;
// function merafun(){
//     console.log("inside mera function");
// }
// console.log(a);
// merafun();



// hoisting
// console.log(a);
// merafun();

// function merafun(){
//     console.log("inside mera function");
// }
// var a=20;//here is simple hoisting but if there is let and const inplace of var  then  hoisting takes place in DTZ(dead temporal zone)


console.log(a);
var a=10;
function fun(){
    var b=100;
    function fun2(){
        console.log(a);
        console.log(b);
    }
    fun2();
}
fun(); 