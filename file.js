const fs = require('fs');
const path = require('path');
const os = require('os');
const Http = require('http');

Http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./index.html');
    
}).listen(3000);