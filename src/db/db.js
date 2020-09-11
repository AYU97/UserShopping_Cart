const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
},(err , db)=>{
    if(err){
        console.log('error while connecting to DB :'+err)
    }
    else{
        console.log('MongoDB connected')
    }
})