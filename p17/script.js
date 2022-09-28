const person = {
    firsName: 'Jack',
    lastName: 'Danial'
};
console.log(person);

const personName = person.firsName;
console.log(personName);

const personLastName = person['last'+'Name'];
// Köşeli parantez ile içeri değişik veriler de girilebilir.
console.log(personLastName);

const midterms ={danielle : 96, thomas: 78};
midterms.thomas= 80;

midterms.danielle ='B-';
midterms.thomas ='A';
midterms.ezra ='D-';
midterms['Anny'] = 'A+';
console.log(midterms);

console.log(" ");

const num =[0,2,4,6];
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);    
}
console.log(" ");

let numberZero=10;
while (numberZero<100) {
    console.log(numberZero);
    numberZero+=10;
}
console.log(" ");

let indexer = 0;
while (true) {
    let guess = Math.floor(Math.random()*10);
    indexer++;
    if (guess==5) {
        console.log('Correct guess'); 
        break;
    } else {
        console.log(indexer+'.th guessWrong guess ' + guess);        
    }    
}
console.log(" ");

const subreddits = ['cringe', 'books', 'chickens', 'funny','soccer'];
for (const subs of subreddits) {
    console.log("Subredits: "+subs);
}
console.log(" ");

const peopNote ={
    George: 90,
    James:70,
    Hawkeye: 39,
    Catyline: 92,
    Rosallina: 68
}
for (const Notes in peopNote) {
    console.log(Notes);
}
console.log(" ");
for (const scores of Object.values(peopNote)) {
    console.log(scores);
}