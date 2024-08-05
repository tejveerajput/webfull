

//1.regular function//point to window object

// function fn(){
//     console.log( this);
// }
// fn();

//method invocation

// let obj={
//     Number:2,
//     fn:function(){
//         console.log(this);
//     }
// }

// let myfun=obj.fn;
// myfun();

// let obj={
//     Number:2,
//     fn:function (){
//         function calculate(){
//             console.log(this);
//         }
//         calculate();//regular calling
//     }
// }
// obj.fn();

//3.constructor function calling


// function Createobj(){
//     this.x=20;
// }
// let obj=new Createobj();
// console.log(obj.x);
// console.log(obj);//point towards to newly  created objects



//4.  .call(),.apply(),  .bind() //polymorphism achieve ho rha call or appply sai

// let obj={
//     a:20,
//     fn:function(){
//         console.log(this);
//     }
// }

// let obj2={
//     a:50,
// }

// obj.fn();
// obj2.fn();//error

// obj.fn.call(obj2);

//.bind()


let obj3={
    a:20,
    fn:function(){
        console.log(this);
    }
}
let myfun=obj.fn.bind(obj);
myfun();//it binds thhis to obj 
