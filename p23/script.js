const v1 = document.querySelector('#v1');
console.log('-> onclick active event on click into element');
v1.onclick = function () {
    console.log('I have been clicked. I am V1 button');
}
function getOff(){
    console.log('Leave me myself !!!');
}
console.log('-> onmouseenter active event on hovering mouse over element');
v1.onmouseenter = getOff;

const v2 = document.querySelector('#v2');
console.log('-> addEventListener() add element activation listener');
v2.addEventListener('click', function () {
    console.log('clicked on v2');    
})

const makeRandomColor = ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();     
    this.style.borderColor = makeRandomColor(); 
}
const v3 = document.querySelector('#v3');
console.log('-> this can be used for inside code for change givin element');
v3.addEventListener('click', colorize)

const inputDetect = document.querySelector('#inputDetect');
console.log("-> addEventListener('keydown') e.key takes what is typed");
console.log("-> addEventListener('keydown') e.code takes what is typed in keyboard");
inputDetect.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code);    
})

const shelterForm = document.querySelector('#shelterForm');
const cominInput = document.querySelector('#cominInput');
const newList = document.querySelector('#newList');

console.log("->  e.preventDefault() prevents normal behaviour of element");
console.log("-> make a submit function. Create a 'li' element inside funciton");
console.log("\t than take input functions value to new created 'li' element");
console.log("\t BOOOM append to list. You add new element to list");
console.log(" e.stopPropagation() stops event bobling");
shelterForm.addEventListener('submit',function (e) {    
    e.preventDefault();    
    const emptyLI = document.createElement('li');
    emptyLI.innerText= cominInput.value;
    newList.append(emptyLI)
    e.stopPropagation();
})

console.log("->  e.target.nodeName gets clicked items name");
console.log("\t than e.target.remove() remove target item");
newList.addEventListener('click', function (e){
    e.target.nodeName === 'li' && e.target.remove();
})