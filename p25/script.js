console.log('-> First make a variable and equal variable to function');
console.log('\t return a new promise. Make resolve and reject consequences');

const fakeRequest = (url) =>{
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(()=>{
            if(rand< 0.7){
                resolve('Data received '+ url)
            }
            reject('Data cannot received '+ url)
        },1000)
    })
}

fakeRequest('justice for GOTHAM')
    .then((data)=>{
        console.log('\nDone with request');
        console.log('Message: ', data)
    })
    .catch((err)=>{
        console.log('\nOh no ! ');
        console.log('Message have failed: ', err)
    })

console.log('-> Make a delayed color changer. Make a promise and take color and delay as parameters');

const colorChangerDelay =(color,delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.querySelector('.colorfulDiv').style.backgroundColor = color;
            resolve();
        },delay)
    })
};

colorChangerDelay('red',1000)
.then(()=> colorChangerDelay('blue',1000))
.then(()=> colorChangerDelay('orange',1000))
.then(()=> colorChangerDelay('yellow',1000))
.then(()=> colorChangerDelay('green',1000))
.then(()=> colorChangerDelay('indigo',1000))
.then(()=> colorChangerDelay('violet',1000))

console.log('-> Async function have two value throw and return');
console.log('\t If function succeeds, use return');
console.log('\t If function fails, use throw for error');
const login = async (username)=>{
    if(!username) throw '! Username is missing !'
    if(username === 'Salih') return 'Welcome to the page '
    throw 'Invalid username'
}

login('Salih')
    .then((msg)=>{
        console.log('\nLogged in');
        console.log(msg);
    })
    .catch((err)=>{
        console.log('\nError !!!');
        console.log(err);
    })

const colorChangerDelayV2 =(color,delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.querySelector('.colorfulDiv2').style.backgroundColor = color;
            resolve();
        },delay)
    })
};

console.log('-> Making a async funct,on with await');
console.log('\tawait mkae function wait for every step. Function moves step by step');
console.log('\treturn used for giving a data out');
async function rainbow(){
    await colorChangerDelayV2('green',2000)
    await colorChangerDelayV2('violet',2000)
    await colorChangerDelayV2('orange',2000)
    await colorChangerDelayV2('indigo',2000)
    return 'FINISHED'
}

async function printRainbow(){
    await rainbow();
    console.log('Rainbow is finished');
}
printRainbow();

console.log('-> Try catch used for catching errors inside of async function');
async function makeTwoRequest(){
    try {
        let data1 = await fakeRequest('my dogs are mising Page')
        console.log("");
        console.log(data1);
        let data2 = await fakeRequest('my cats are mising Page')
        console.log(data2);
        
    } catch (err) {
        console.log("");
        console.log('Error has been found \n' ,err);
    }
}
makeTwoRequest();