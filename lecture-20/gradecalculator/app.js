




//grade calculator
function grade(marks){
    if(marks>=80){
        return "o+";
    }
    else if(marks>=60 && marks<80){
        return "A";
    }
    else if(marks>=40 && marks<60){
        return "B";
    }
    else{
        return "C";
    }
}
console.log(grade(75));
console.log(grade(99));
console.log(grade(10));
console.log(grade('samarth'));