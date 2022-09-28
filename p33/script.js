const express = require('express');
const app = express();
/*Port'u çalıştırmayı unutma */

/*
app.use((req,res)=>{
    console.log("New request");
    res.send('<h1>I see you my man</h1>');})
*/
/*Kullanıcıya veri verir */

app.get('/',(req,res)=>{
    console.log("Person get request in the home page");
    res.send('This is the home page');
})
app.post('/',(req,res)=>{
    console.log("Person posting request in the home page");
    res.send('You posted on homepage');
})

app.get('/cats',(req,res)=>{
    console.log("Person get request  in the cat page");
    res.send('There is a cat in the house');
})

app.get('*',(req,res)=>{
    console.log("Person get request in unknown page");
    res.send("I don't know where you are");
})

app.listen(3000,()=>{
    console.log('Listening port 3000! ');
})
/*Server çalıştırmak için*/