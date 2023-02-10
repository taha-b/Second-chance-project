const db = require("../database-mysql");

const getAlltUsers = (req, res) => {
  
  db.query("SELECT * FROM users WHERE id = ?")
  .then((result)=>res.send(result[0]))
  .catch((error)=>console.log)
  };

const addNewUser = (req, res) => {
    const { userId,fullName, adresseMail, passeword} = req.body;
    db.query("INSERT INTO users (userId,fullName, adresseMail, passeword) VALUES (?, ?, ?, ?)", [userId,fullName, adresseMail,passeword])
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  };

module.exports = {
    addNewUser,
    getAlltUsers
 }