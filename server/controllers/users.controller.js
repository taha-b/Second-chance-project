const db = require("../database-mysql");

const getAlltUsers = (req, res) => {
  
  db.query("SELECT * FROM users WHERE id = ?")
  .then((result)=>res.send(result[0]))
  .catch((error)=>console.log)
  };

const addNewUser = (req, res) => {
    const { userId,fullName, adresseMail, passeword} = req.body;
    console.log("FIRED")
    db.
    query("INSERT INTO users (userId,fullName, adresseMail, passeword) VALUES (?, ?, ?, ?)",
     [userId,fullName, adresseMail,passeword])
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  };

  const login = (req, res) => {
    const {email} = req.params
   db.query(`select * from users where adresseMail= ?  ;`, [email])
   .then((r)=>{
    if(r[0].length){
      if(r[0][0].passeword === req.headers.passeword){
        res.send(r[0])
      }else{
        res.send("WRONG PASSWORD")
      }  
    }
    else{
      res.send("USER NOT FOUND")
    }
   }).catch((err)=> console.log(err))
  };


module.exports = {
    addNewUser,
    getAlltUsers,
    login
 }