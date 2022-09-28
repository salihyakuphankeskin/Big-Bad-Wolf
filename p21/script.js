console.log("-> getElementById takes element from HTML according to their ID");
const LosPollos = document.getElementById('LosPollos');
console.log(LosPollos);

console.log("-> getElementById takes elements from HTML according to their tag name");
const images = document.getElementsByTagName('img');
for (const img of images) {
    console.log(img.src);
}

console.log("-> getElementById takes elements from HTML according to their class names");
const Gustavo = document.getElementsByClassName('Gustavo');
console.log(Gustavo);

console.log("-> querySelector takes element from givin paramameter");
const quoteGUS = document.querySelector('#quoteGUS')
console.log(quoteGUS.innerHTML);

console.log("-> querySelectors takes elements from givin paramameter");
const quoteElColipo = document.querySelectorAll('.quoteElColipo');
for (const littlePiecesofQuote of quoteElColipo) {
    console.log(littlePiecesofQuote.innerHTML);    
}
console.log("-> innerText is about text inside givin element");
document.querySelector('#Lies').innerText="<b>Lol This tag is working</b>";
console.log("-> innerHTML is about all variables include tags inside givin element");
document.querySelector('#Lie').innerHTML="<b>Lol This tag is working</b>";

console.log("-> getAttribute takes element givin attribute");
const AnchorTag = document.querySelector('#LinkTakeIt');
const firstLink = AnchorTag.getAttribute('href');
console.log('Link is '+ firstLink);
console.log("-> setAttribute sets new attribute to givin elemnt");
AnchorTag.setAttribute('href','https://en.wikipedia.org/wiki/Dog');
const secondLink = AnchorTag.getAttribute('href');
console.log('Link is '+ secondLink);

const hoya = document.querySelector('.hoya');
console.log("-> you can customize style with style.color");
hoya.style.color='Brown';
console.log("-> you can get last computed style with window.getComputedStyle ");

const changeMe = document.querySelector('#changeMe');
console.log("-> .classList.add() add new items to class list for givin element");
changeMe.classList.add('newStyles');
console.log("-> .classList.contains() checks if class contains class list for givin element");
changeMe.classList.contains('newStyles');
console.log("-> .classList.toggle() ON/OFF classes for givin element");
changeMe.classList.toggle('newStyles');