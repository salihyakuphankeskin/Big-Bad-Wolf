const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log("Person geting request in the home page");
    res.send('This is the home page');
})
app.post('/',(req,res)=>{
    console.log("Person posting request in the home page");
    res.send('You posted on homepage');
})

app.post('/cats',(req,res)=>{
    console.log("Person posting request in the cat page");
    res.send('You posted on cats page');
})
app.get('/cats',(req,res)=>{
    console.log("Person geting request in the cat page");
    res.send('There is a cat in the house');
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const{subreddit, postId}=req.params;
    console.log(postId+ " geting request in the "+subreddit+" page");
    res.send(`<h1>${postId} is browsing in ${subreddit} subreddit</h1>`);
})
app.get('/r/:subreddit',(req,res)=>{
    const{subreddit}=req.params;
    console.log("Person geting request in the "+subreddit+" page");
    res.send(`<h1>You are browsing in ${subreddit} subreddit</h1>`);
})

app.get('/search',(req,res)=>{
    const{q}= req.query;
    console.log("People searched on "+q);
    res.send(`<h1>You are searching for: ${q}</h1>`);
})

app.listen(3000,()=>{
    console.log('Listening port 3000! ');
})
/*Server çalıştırmak için*/

/*NODEMON indir canlı değişiklik için */