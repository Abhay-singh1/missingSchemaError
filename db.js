const config = require('config');
const db = config.get('mongoURI');
const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        console.log('Connecting to database');
        await mongoose.connect(db,{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
        });
        
        
        console.log('MongoDB connected');
    }

    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;