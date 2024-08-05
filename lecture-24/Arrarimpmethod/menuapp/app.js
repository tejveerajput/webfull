
//remove nonveg item form menu
let menu=['palak paneer','pizza','chicken bhurgi','Chicken burger','veg burger','noddles'];

function isVeg(food){
    if(food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1){
        return false;
    }
    return true;

}
let vegmenu=menu.filter(isVeg)
console.log(menu);
console.log(vegmenu)