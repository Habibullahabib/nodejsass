const express = require('express');
 
const  allCategory=require("../controller/user.controller");
const createUser=require("../controller/user.controller");

const router=express.Router();

 
router.post('/', createUser);
  
router.get('/', allCategory);

module.exports=router;