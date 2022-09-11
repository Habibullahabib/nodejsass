const express = require('express');
const userRouter=require("./routes/user.router");

require("./config/db");
const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))

app.use(express.json());

app.use("/api/user", userRouter);

module.exports=app;