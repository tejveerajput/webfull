

//for loop
// let i=0;
// for(i=0;i<=5;i++){
//     for(let j=0;j<=5;j++){
//         if(i==j){
//             break;
//         }
//         else{
//             console.log(i+" "+j); 
//         }
//     }
// }

//while loop

// let k=100;
// while(k>=0){
//     console.log(k);
//     k=k-10;
// }


//for-in(objects)

let person={
    name:'tejveer',
    age:21,
    ismale:true
}

let arr=['hello','bye','hi'];

for(let item in person){
    console.log(   `${item}--> ${person[item]}`);
}


//for-of(iterables like array,lists,map)
for(let item of arr){
    console.log(item);
}








