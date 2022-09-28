const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/',(req,res)=>{
    const numRand = Math.floor(Math.random()*10)+1;
    res.render('home.ejs',{numRand})
})
app.get('/cats',(req,res)=>{
    const cats =['blue','rocket','jessie','james','carl']
    res.render('cats.ejs',{cats})
})

app.get('/r/:subreddit',(req,res)=>{
    const{subreddit}=req.params;
    res.render('subreddit',{subreddit});
})
app.get('/newtry',(req,res)=>{
    res.render('newtry');
})

app.listen(3000,()=>{console.log(`3000 port has been opened`);})
