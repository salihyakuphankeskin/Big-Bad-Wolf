const human01 = `{"name":"Alice", "surname":"Bartoleon", "age":"20"}`;
const human01V2 = JSON.parse(human01);
const human01V3 = JSON.stringify(human01V2);
console.log("-> JSON.parse() turns strings to JSON");
console.log(human01V2);
console.log("-> JSON.stringify() JSON to strings");
console.log(human01V3);

console.log("");

console.log("-> fetch is a promise returnning callback function");
console.log("fetch('data')\n\t.then((res)=>{return res.json()})\n\t.catch((data)=>{console.log(data)})");
console.log("-> fetch send to request to return data from databank\n then() takes returned data from fetch as string\n return res.json() make string to json inside fetch and return to next then()");
fetch("https://swapi.dev/api/people/1")
    .then((res)=>{
        console.log('Resolved! ',res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((e)=>{
        console.log('Error !!! ',e);
    })

console.log("-> aync function can be used for taking data from databank");
console.log("const asyncFnc = async () => {");
console.log("\ttry {");
console.log("\t\tconst res = await fetch(url)");
console.log("\t\tconst data = await res.json()");
console.log("\t\tconsole.log(data)}");
console.log("\t\catch (e) { console.log('Error ',e)}}");
console.log("loadStarWarsPeople()");

console.log('-> use try{}catch{} for collecting errors');
console.log("-> await data from fetch and save as 'res'");
console.log("-> await 'res' turn into json and save as 'data'");
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/2");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/3");
        const data2 = await res2.json();
        console.log(data2);        
    } catch (e) {
        console.log('async loadStarWarsPeople function error !!! ',e);
        
    }
}
loadStarWarsPeople();