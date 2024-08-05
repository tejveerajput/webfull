



function getBoolean(item){
    return  typeof item === 'boolean';
}


function getNumber(item){
    return  typeof item === 'number';
}

function getString(item){
    return  typeof item === 'string';
}

function check(item,fn){
    return fn(item);
}

console.log(check(true,getBoolean));
console.log(check(20,getNumber));
console.log(check("hello",getString));