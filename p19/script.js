console.log("try-catch method used for catching error or bugs");
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (error) {
        console.log("Please pass a string next time!");
    }    
}

const nums =[1,2,3,4,5,6,7,8,9];
let numTotal="";
console.log("");

console.log("For each uses every variable in element");
nums.forEach(function print(el){
    numTotal= numTotal+" "+el;
    if (el===9) {
        console.log(numTotal);  
        numTotal="";      
    }
})
console.log("");
console.log("For of new version of for each");
console.log("For of uses every variable in element");
for (const el of nums) {
    numTotal= numTotal+" "+el;
    if (el===9) {
    console.log(numTotal);        
    }    
}
console.log("");

console.log("Map function take every variable in array, uses function and saves in other element ");
const texts=['rofl','lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase();
})
console.log(texts);
console.log(caps);
console.log("");

console.log("Arrow function squazed way to make functions");
const square = (x) => {return x*x;}
console.log(square(2));
const rollDice = ()=>{return Math.floor(Math.random()*6)+1}

console.log("");

console.log("Arrow implicts functions make arrow functions one line code");
const isEven = num =>(num % 2 === 0)
const isOdd = num => num % 2 !==0;
console.log("Is 353 even? Answer is "+isEven(353));
console.log("Is 353 odd? Answer is "+isOdd(353));
console.log("");

console.log("setTimeout waits giving time and executes function");
setTimeout(     ()=>{console.log("Hello!!!");}  ,3000)
console.log("setInterval waits giving time and executes function over and over again");
setInterval(    ()=>{console.log(rollDice());}  ,5000);
console.log("");

console.log("filter checks every variable and take filtered ones");
const numbero=[10,20,30,40,50,60,70,80,90,100]
const numbero35= numbero.filter(n => {return n<60 && n>20});
console.log(numbero35);
console.log("");

console.log("every returns true if every value requires functions true");
console.log("some returns true if at least one value requires functions true");
const exams = [80,81,56,75,95,56,71,63,54,96,53,87,65,89,67,85,76,88];
const over50 = exams.every(score => score >= 50);
const overSome90 = exams.some(score => score >= 90);
console.log(over50);
console.log(overSome90);
console.log("");

console.log("reduce function takes return value as first varible. Takes current value as second");
const totalNumth = [3,5,7,9,11].reduce((minValue, currentValue)=>{
    if(minValue<= currentValue){return minValue}
})
console.log("[3,5,7,9,11] minimum number: "+totalNumth);
console.log("");
