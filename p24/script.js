const newDiv = document.querySelector('#newDiv');

console.log("->  make a function with setTimeout");
const delayedColor =(newColor, delay, nextThing)=>{
    setTimeout(()=>{
        newDiv.style.backgroundColor= newColor;
        nextThing && nextThing();
    }, delay);
};
console.log("-> Make loop of functions");
delayedColor('green',2000, ()=>{
    delayedColor('red',2000, ()=>{
        delayedColor('blue',2000, ()=>{

        });
    });
});
console.log("");

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
        if (delay > 1000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (1000)) + 500;
        setTimeout(() => {
            if (delay > 1000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


console.log("-> Make a request. If request succeed, make response function");
console.log("-> If request fails, make error function");
console.log("-> fakeRequestCallback(url, success, failure)");

/*
fakeRequestCallback('books.com/page1',
    function (response) {
    console.log("IT WORKED!!!!"+ response);
        fakeRequestCallback('books.com/page2',
            function (response){
            console.log("IT WORKED AGAIN!!!!"+response);
                fakeRequestCallback('books.com/page3',
                    function (response) {
                    console.log("IT WORKED AGAIN (3rd req)!!!!"+response);},

                function (err) {
                    console.log("ERROR (3rd req)!!!", err)
                })},
        function (err) {
            console.log("ERROR (2nd req)!!!", err)
        })},
function (err) {
    console.log("ERROR!!!", err)
})
*/

console.log("");
console.log("-> Make a promise. If request succeed, use then()");
console.log("-> If request fails, use catch()");
console.log("-> fakeRequestCallback(url)");
console.log("\t.then()");
console.log("\t.catch()");

/*
fakeRequestPromise('yelp.com/api/coffee/page1')
.then(() => {console.log("-- IT WORKED!!!!!! (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {console.log("-- IT WORKED!!!!!! (page2)")
            fakeRequestPromise('yelp.com/api/coffee/page3')
            .then(() => {console.log("-- IT WORKED!!!!!! (page3)")})

            .catch(() => {console.log("-- OH NO, ERROR!!! (page3)")})})
        .catch(() => {console.log("-- OH NO, ERROR!!! (page2)")})})
.catch(() => {console.log("-- OH NO, ERROR!!! (page1)")})
*/


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
console.log("");
console.log("-> Make a promise chain. If request succeed, use then() for first time.");
console.log("-> In second time, return a promise from then()");
console.log("-> If request fails, use catch()");
console.log("-> fakeRequestCallback(url)");
console.log("\t.then(return fakeRequestPromise())");
console.log("\t.catch()");
console.log("");

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("*\tIT WORKED ! (page1)")
        console.log("*\t"+data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("*\tIT WORKED ! (page2)")
        console.log("*\t"+data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("*\tIT WORKED ! (page3)")
        console.log("*\t"+data)
    })
    .catch((err) => {
        console.log("*\tOH NO, A REQUEST FAILED !")
        console.log("*\t"+err)
    })



