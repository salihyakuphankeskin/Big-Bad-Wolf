let names = ["Kemal" , "Can", "Hüseyin", "Osman"];
console.log();

console.log("Main array: (Nothing Changed)\n- "+names);
document.getElementById("n0").innerHTML="Main array: (Nothing Changed)";
document.getElementById("m0").innerHTML=names;

names.push("Yasemin");
console.log("Push one item: (names.push add one item end of the array)\n- "+names);
document.getElementById("n1").innerHTML="Push one item: (names.push add one item end of the array)";
document.getElementById("m1").innerHTML=names;

names.pop();
console.log("Pop one item: (names.pop remove one item end of the array)\n- "+names);
document.getElementById("n2").innerHTML="Pop one item: (names.pop remove one item end of the array)";
document.getElementById("m2").innerHTML=names;

names.unshift("Nergiz");
console.log("Unshift one item: (names.push add one item start of the array)\n- "+names);
document.getElementById("n3").innerHTML="Unshift one item: (names.push add one item start of the array)";
document.getElementById("m3").innerHTML=names;

names.shift();
console.log("Shift one item: (names.pop remove one item start of the array)\n- "+names);
document.getElementById("n4").innerHTML="Shift one item: (names.pop remove one item start of the array)";
document.getElementById("m4").innerHTML=names;

let dogs=['rusty', 'quat'];
let cats=['blue', 'kitty'];
document.getElementById("a1").innerHTML= `Dogs: ${dogs}`;
document.getElementById("a2").innerHTML= `Cats: ${cats}`;

let ComboAnimal = dogs.concat(cats);
document.getElementById("a3").innerHTML= `Concat merge two element with adding up`;
document.getElementById("a4").innerHTML= `dogs.concat(cats): ${ComboAnimal}`;

let Answer = cats.includes('kitty');
document.getElementById("a5").innerHTML= `Includes checkes is it include that element`;
document.getElementById("a6").innerHTML= `Does cat element includes 'kitty': ${Answer}`;

dogs.indexOf('quat');
document.getElementById("a7").innerHTML= `IndexOf finds item place in element`;
document.getElementById("a8").innerHTML= `Where 'quat' is in dogs element: ${Answer}`;

ComboAnimal.reverse();
document.getElementById("a9").innerHTML= `Reverse element`;
document.getElementById("a10").innerHTML= `Reverse ComboAnimal element: ${Answer}`;

console.log(`Combo Animal: ${ComboAnimal}`)
let newElemnt = ComboAnimal.slice(1,3)
console.log("1-3 variables is: ");
console.log(newElemnt.toString());