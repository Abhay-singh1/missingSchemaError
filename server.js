const express = require('express');
const connectDb = require('C:\\Users\\abhay\\FIRSTAPP\\config\\db.js');
const os = require('os');
const fs = require('fs');
const app = express();
console.log('no error!')
connectDb();
console.log('db error!')
app.use(express.json({extended: false}));
console.log('o error!')
app.get('/',(req,res) => {
    res.send('API RUNNING')
});

app.use('/api/users', require('./routes/api/users'));
console.log('n error!')

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT=  process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server started on port :${PORT}`));


