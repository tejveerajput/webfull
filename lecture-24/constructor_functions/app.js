
// function fun(){

// }
// let naam=fun();
// console.log(naam);

//constructor


function User(user,pno){

    this.username=user;
    this.phoneno=pno;
   

}
User.prototype.description=function(){
    
        return `my name is ${this.username}`
    
}
let user1= new User('tej','901229090');
let user2= new User('raj','646446446');
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());
