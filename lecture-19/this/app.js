

let obj1={
    evs:90,
    CN:100,
    webd:100,
    maths:80,
    total:function(){  //method
        return(90+100+100+80);
    }
}

 //using this keyword

let obj2={
    naam:"tejveer",
    evs:90,
    CN:100,
    webd:100,
    maths:80,
    total:function(){  //method
        return(this.evs);
    },
    bulao:function(){
        return(`${this.naam}  ko  bulao`);
    }
}

console.log(obj2.total());
console.log(obj2.bulao());