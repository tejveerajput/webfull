


// let s=['tej','raj','put'];


// s.forEach(function(item){
//     console.log(item)
// })


// s.forEach(function(item,index){
//     console.log(`index was ${index}-->item was ${item}`)
// })


//map() method
// let arr=[10,20,340,50,60,70];
// let newarr=arr.map(function(item){
//     return item*2;
// })

// let arr=[10,20,340,50,60,70];
// let newarr=arr.map(function(item,index){
//     return [item*2, index];
// })

// console.log(arr);
// console.log(newarr);



//filter()  

// let arr=[10,20,30];
// let newarr=arr.filter(function(item){
//     if(item>10){
//         return true;
//     }
//     return false;
// })

// console.log(arr);
// console.log(newarr);

//sort()  

let arr=[10,40,30,20,90,60,33,21,12,56,78,43,8];
let newarr=arr.sort(function(a,b){
    return a-b;//ascen
    // return b-a;//descen
});
// console.log(arr);
console.log(newarr);