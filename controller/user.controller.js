const User=require("../model/user.model")
const {v4:uuid}=require("uuid");

 
 
  const createUser =  async  (req, res) => {

    
    try{
       await  User.insertMany([
        {
          "name":"thai"
        },

        {
          "name":"thai"
        }
       ]);

         
        
      
    }catch(error){
         console.log("errrrrrrrrrrrrrrrrrrr")
    }
     
  }


  const allCategory =  async (req, res) =>{
    try {
      const category= await User.find({});
      res.render('index', category);
      console.log(category)
    } catch (error) {
      console.log("reender page error");
    }
  }
   
module.exports=createUser;
module.exports=allCategory;

 
 