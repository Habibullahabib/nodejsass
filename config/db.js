const mongoose=require("mongoose");
const config=require("./config");


const Dburl=config.db.url;

mongoose.connect(Dburl)
.then(()=>{
    console.log("mpngose at last connected")
})

.catch((error)=>{
    console.log("error");
    process.exit(1);
})