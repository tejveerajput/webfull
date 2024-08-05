//small appllication

function counter(){
    let count=0;

    return{
        getCount: function(){
            return count;
        },
        incerment: function(){
            count++;
        },
        decrement:function(){
            count--;
        },
        reset:function(){
            count=0;
        }
    }






}
let cnt=counter();
console.log(cnt.getCount());
cnt.incerment();
cnt.incerment();
cnt.incerment();
console.log(cnt.getCount());
cnt.decrement();
cnt.decrement();
console.log(cnt.getCount());
cnt.reset();
console.log(cnt.getCount());

