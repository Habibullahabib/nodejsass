const app=require("./app");
const config=require("./config/config");
const PORT=config.app.port;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(PORT,()=>{
    console.log(`app is running on http//:localhost:${PORT}`)
})