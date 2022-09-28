console.log("Make a function");
function SingSong() {
    console.log("Here I sing");
    console.log("Lalala");
}
SingSong();
console.log("");

console.log("Make a function that takes variable");
function greet(name) {
    console.log("Hello "+name);    
}
greet("Cat Lady");
console.log("");

function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number')
    {   return false; }
    return x+y    
}
let result=add(5,45);
console.log(result);

console.log("Functions can take upper level elements variables");
function bankRobbery(){
    const heroes =['Spiderman', 'Wolverine'];
    function cryForHelp() {
        for (const hero of heroes) {
            console.log('Help us !!! ' + hero.toUpperCase());            
        }
    }
    cryForHelp();
}
bankRobbery();
console.log("");

console.log("Functions can return a value");
const substract = function (x,y) {
    return x - y;    
}
console.log(substract(238,154));
console.log("");

console.log("Function can have loop inside of function");
function callTwice(func){for (let index = 0; index < 2; index++) {func();}}
function rollDice(){
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}
callTwice(rollDice);
console.log("");
function isBetween(num){
    return num>=50 && num<=100
}

console.log("You can make functiıns inside of objects and recall them as normal objects");
const mathematic ={
    add(num,num2){return num+num2},
    substract(num,num2){return num-num2},
    multiply(num,num2){return num*num2},
    divide(num,num2){return num/num2},
    square(num){return num*num}
}
console.log("1 + 2 is " + mathematic.add(1,2));
console.log("");

console.log("this keyword use for taking upper level object's variable and use it");
const myFriend ={
    name:"Catelyn",
    lastName:"Brokune",
    shoutName(){
        console.log(`Hello I am ${this.name} ${this.lastName}`)
    }
} 
const shoutNameOutside = myFriend.shoutName;
const shoutNameOutsideV2 = myFriend.shoutName();
myFriend.shoutName();
shoutNameOutside();
console.log("");