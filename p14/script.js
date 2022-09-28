let myFriend = "Pedro";
    console.log("▶ .length function is deciding variable length");
    console.log("My friend name is " + myFriend.length + " long."); 
console.log("\n");

let lospolloshermanosfamily ="hello and welcome to the los pollos hermanos family.";
console.log("▶ l.toUpperCase() function is making Upper Case");
console.log(lospolloshermanosfamily);
console.log(lospolloshermanosfamily.toUpperCase());
console.log("\n");

let freeSpace="     There is plenty of area           ";
console.log("▶ .trim() function is trimming");
console.log(freeSpace);
console.log(freeSpace.trim());
console.log("\n");

let Decider ="Find words in me";
console.log("▶ .indexOf finds place in variable");
console.log(Decider);
console.log("E in ' "+Decider+" ' is place "+ Decider.indexOf("e"));
console.log("\n");

let slicedWord =" HAHAHAHAHA slices doesn't work on me.";
console.log("▶ .slice() is slicing the string");
console.log(slicedWord);
console.log(` Slice start from 10.word '${slicedWord.slice(11)}'`);
console.log(` Slice start from 26.word to 32. word '${slicedWord.slice(27,31)}'`);
console.log("\n");

let doppelGanger =" LoLoLoL I am a shape-shifter";
console.log("▶ .replace() is changing words in the string");
console.log(doppelGanger);
console.log(` replace changing LoL '${doppelGanger.replace('LoLoLoL ','My transformation is finished. ')}'`);
console.log("\n");

let reapeatThisShit = " Game Over ";
console.log("▶ .repeat() is reapating words");
console.log(reapeatThisShit);
console.log(`repeat 4 times ${reapeatThisShit.repeat(4)}`);