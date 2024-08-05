//bekar tarika

// function step1(){
//     setTimeout(function(){
//         console.log('image select kar rha hu')
//         return 'Image';
//     },4000);
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`sundar kar rha ${image}  phto`)
//         return 'sundar wali Image';
//     },2000);
// }

// function step3(finalimage){
//     setTimeout(function(){
//         console.log(`badia sa caption dekh lia${finalimage}`)
//         return 'photo with caption';
//     },3000);
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(` ${final}upload`)
        
//     },2000);
// }


// //calling

// let image=step1();
// let filteredimage=step2(image);
// let finalimage=step3(filteredimage);
// step4(finalimage);


//better tarika


function step1(fn){
    setTimeout(function(){
        console.log('selecting image')
        fn('image');
    },4000);
}
    
function step2(image,cb){
    setTimeout(function(){
        console.log(`applying filter to ${image}  `)
        // return 'filtered foto';
        cb('filtered foto');
    },2000);
}
function step3(filteredimage,cb){
    setTimeout(function(){
        console.log(`badia sa caption dekh lia${filteredimage}`)
        // return 'photo with caption';
        cb('photo with caption');
    },3000);
}

function step4(final){
    setTimeout(function(){
        console.log(` ${final}upload`)
        
    },2000);
}
step1(function(image){
    step2(image,function(filteredimage){
        step3(filteredimage,function(finalimage){
            step4(finalimage);
        });
    });
});


//the above conditon is called cal back hell(when flow of code moves horizontally);
//solution of call back hell is promises;
//solution of promises of Async await;