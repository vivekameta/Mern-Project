const mongoose=require('mongoose');

let db = mongoose.connect('mongodb+srv://vickyameta8:tBgbT9S4JxDjf4MT@cluster0.e79gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("MongoDb Connected...."))
.catch((err)=>console.log(err))


module.exports=db;
