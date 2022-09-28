
console.log("-> firstText.parentElement take parent element");
const firstText = document.querySelector("#firstText");
const fParent = firstText.parentElement;
console.log(fParent);
console.log(firstText.nextElementSibling);

console.log("-> fParent.appendChild() add new child to element");
const newDiv = document.createElement('div');
fParent.appendChild(newDiv);
newDiv.innerText='HELLOOOO I am the new TEXT';
newDiv.classList.add('newClass');

console.log("-> thirdO.append() just appends new variable to element");
const thirdO = document.querySelector('#thirdO');
thirdO.append(' I am the SWORD of my voice....');
console.log("-> you can create element and append new element to body");
const newH2 = document.createElement('h2');
newH2.append("It's all around the world");

console.log("-> insertAdjacentElement('afterend',newH2) after end adds element new to element");
const newH1 = document.querySelector('h1');
newH1.insertAdjacentElement('afterend',newH2);

console.log("-> removeChild() remove child element from parent element");
const parentOL = document.querySelector('#Zebra').parentElement;
parentOL.removeChild(Zebra)

console.log("-> remove() removes element");
document.querySelector('#forthIO').remove()