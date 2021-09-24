var express = require('express');
var app = express();
const port = 8080;
const path=require('path');

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'myfile.html'));
});

app.get('/myfile.html', (req,res)=>{
    res.sendFile(path.join(__dirname,'myfile.html'))
})

app.get('/morphle', (req,res)=>{
    res.redirect('https://www.morphlelabs.com/');
})

app.get('/api/psaux', (req,res)=>{
    res.sendFile(path.join(__dirname,'psaux.txt'));
})

app.listen(port);
console.log("Server is running in http://localhost:"+port);