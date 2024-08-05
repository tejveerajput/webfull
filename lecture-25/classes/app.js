

//constructor function
// function Person(fname,lname,email){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.email=email;


// }

// Person.prototype.printName=function(){
//     console.log (` my name is ${this.firstName}  ${this.lastName}`);

// }
// Person.prototype.getName=function(){
//     return  (`${this.firstName}  ${this.lastName}`);

// }
// let person1=new Person('tejveer','rajput','tejveersingh275@hgmail.com');

// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());



//class syntax

class Person{
    constructor(firstName,lastName,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }
    getName(){
        return  (`${this.firstName}  ${this.lastName}`);
    }
    printName(){
        console.log (` my name is ${this.firstName}  ${this.lastName}`);
    }
}

//inherit person to student
 class Student extends Person{
    constructor(firstName,lastName,email,groupNo){
        super(firstName,lastName,email);//used to override CF of parent class
        this.gpNo=groupNo;
    }
    getName(){
        return  (` super sai bhi uper ${this.firstName}  ${this.lastName}`);
    }

 } 

 let person3=new Student('brack','obama','brack@gmail.com',100);
 console.log(person3.email);
 console.log(person3.gpNo);
 console.log(person3.getName());



// let person2=new Person('ms','dhoni','ms@gmail.com');
// console.log(person2);
// console.log(person2.email);
// console.log(person2.lastName);
// console.log(person2.printName());
// console.log(person2.getName());