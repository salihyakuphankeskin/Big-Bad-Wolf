console.log("-> Axios a library for making http requests");
console.log("-> axios have less code from fetch. It take Json data fast");
console.log("axios.get(url)")
console.log("\t.then((res)=>{console.log(res))");
console.log("\t.catch(e=>{console.log(e);})");
console.log("");
axios.get('https://swapi.dev/api/people/1')
    .then((res)=>{console.log('RESPONSE: ',res);})
    .catch(e=>{console.log("Error : ",e);})

console.log("->Axios work with async function as well");
console.log("->async function just waits axios.get(url). ");
console.log("->Then res.data data gives wanted JSON item");
console.log("->Lasty make active function");

console.log("const starWarsPeople = async (id) => {");
console.log("\tconst res = await axios.get(url)");
console.log("\tconsole.log(res.data);}");
console.log("starWarsPeople()");
console.log("");
const starWarsPeople = async(id)=>{
    const idPerson = `https://swapi.dev/api/people/${id}`;
    const res = await axios.get(idPerson);
    console.log(res.data);}
starWarsPeople(3);

const jokes = document.querySelector('#jokes');
const button =document.querySelector('button');

console.log("-> Config elemts can be added as extra to get function");
console.log("const config ={headers:{Accept:'application/json'}}");
console.log("const res = await axios.get('https://icanhazdadjoke.com/',config)");
console.log("");
const getDadJoke = async ()=>{
    try{
        const config ={headers:{Accept:'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/',config)
        return res.data.joke
    }
    catch(e){console.log('No Joke ',e);}
}

const addNewJoke = async()=>{
    const jokeText = await getDadJoke()
    const newLI= document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}

button.addEventListener('click', addNewJoke)