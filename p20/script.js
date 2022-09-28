console.log("-> Default Paramter uses giving parameter if nothing used");
function rollDie(numSides=6){
    return Math.floor(Math.random()*numSides)+1
}
console.log(rollDie());

console.log("-> ... Spreads elements variables as seperate arguments");
const nums =[77,49,11,76,19,1,42,80,13,35];
const numsMax = Math.max(...nums);
console.log(...nums);
console.log(...'Hello');

console.log("-> Can copy and spread arrays");
const LondonLivers =['Vance Barker','Kyle Haines']
const BroklynLivers =['Evonne Wade','Ronan Butcher','Tetty Jones']
const allPeopleLivers =[...LondonLivers, ...BroklynLivers];
console.log(...allPeopleLivers);

console.log("-> Objects can merge with spread");
const dataFromDataBank ={
    email:"AdrianneTuft@gmail.com",
    password:"IloveBENNY",
    username:"Adrianne the fucking Tuft"
}
const newMemberRegisteration ={...dataFromDataBank, id: 234, isAdmin: false}

console.log("-> Spread make function work according to givin value without quantity limit");
function sums(...numbero){
    return numbero.reduce((totalValue, currentValue) => {return totalValue + currentValue})
}
console.log(sums(1,2,3,4,5,6));
function raceResults(gold,silver,...restOfThem){
    console.log(`Gold menal goes to ${gold}`);
    console.log(`Silver menal goes to ${silver}`);
    console.log(`Thanks for joinning ${restOfThem}`);
}

console.log("-> Destructing object to make new independent variable");
const firstUser={
    fistName:"Elsie",
    lastName:"Herrera",
    eMail:"elsie.herrera@example.com",
    phone:"(316) 741 6818"
}
const{fistName:MsEliseName,lastName:MsEliseLastName,eMail:MsEliseEMail,}= firstUser;

console.log("-> Desuctrions object in function in parameter part");
function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");
console.log("->");