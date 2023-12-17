const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


router.get("/",(req,res)=>{
  res.send(JSON.stringify(friends,null,4));
});


router.get("/:email",(req,res)=>{
  const email = req.params.email;
  res.send(friends[email]);

});

router.post("/",(req,res)=>{
  if (req.body.email)
  {
    friends[req.body.email] = {
      "firstName": req.body.firstName,
    };
    res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");}
});


  router.put("/:email", function (req, res) { 
    const email = req.params.email; 
    let friend = friends[email] 
    if (friend) { 
    let DOB = req.body.DOB; 

     if(DOB) { 
     friend["DOB"] = DOB 
     } 
    
     friends[email]=friend; 
     res.send(`Friend with the email ${email} updated.`); 
     } 
     else{ 
     res.send("Unable to find friend!"); 
     } 
     });
    




  router.delete("/:email", (req, res) => { 
     const email = req.params.email; 
     if (email){ 
     delete friends[email] 
     } 
     res.send(`Friend with the email ${email} deleted.`); 
     });
    

module.exports=router;