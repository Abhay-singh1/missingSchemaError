const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');
const path = require('path');
const app =express();

// app.use(('/public',express.static(path.join(__dirname,'static'))))
// app.use(bodyparser.urlencoded({extended : false}));
// app.use(bodyparser.json());


app.get('/',(req,res)=>{
    // const readStream = fs.createReadStream('./index.html');
    // res.writeHead(200,{'content-type':'text/html'});
    res.sendFile(path.join(__dirname,'index.html'));
    // readStream.pipe(res);
});
// app.get('/about',(req,res)=>{
//     const readStream = fs.createReadStream('./about.html');
//     res.writeHead(200,{'content-type':'text/html'});
//     readStream.pipe(res)
// });

app.post('/',(req,res)=>{
    
    res.json({success:true})
    
})
app.listen(2000);