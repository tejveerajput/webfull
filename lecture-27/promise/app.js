


// //promise
// let promise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let data='hi dosto ye promise hai';
//         // resolve(data);case 1
//         // let err='opps error aa gyi';
//         // reject(err);
//         // resolve('hi mai resolve ho gya.then()')
//         reject('hi mai loot gya.catch()')

//     },3000);
// });

// promise.then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err);
// });


// let p1=new Promise((resolve,reject)=>{
//     console.log('3 sec ka wait karo kaam in orogress');
//     setTimeout(function(){
//         resolve();
//         // reject();

//     },3000);
// });

// //p1.then().catch();
// p1.then(()=>{
//     console.log(('kaam ho gya'));
// })
// .catch(()=>{
//     console.log('error aa gyo mori maayia')
// })

//.then()chaining; arise kar rhe hai problem ko 

let p1=new Promise((resolve,reject)=>{
    console.log('3 sec ka wait karo kaam in orogress');
    setTimeout(function(){
        resolve();
        // reject();

    },3000);
});
p1.then(()=>{
    return new Promise((resolve,reject)=>{
        console.log(('promise run kar diya hai wait kro'));
        setTimeout(()=>{
            console.log('2 sec lag gye bhaisahab');
            resolve();
        },2000)

    })
})
.then(()=>{
    console.log('dono kaam ho gye mere');
})

