const db = require("../database-mysql");

const selectAll = function (req, res) {
  db.query("SELECT * FROM skills")
  .then((result)=>res.send(result[0]))    
  .catch((err)=>console.log(err))};

const selectOne = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM skills WHERE id = ? ",[id])
  .then((result)=>res.send(result[0]))    
  .catch((err)=>console.log(err))
};
const addSkill = (req, res) => {
  const { title } = req.body;
  db.query("INSERT INTO skills (title) VALUES (?)", [title])
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
};

const updateSkill = (req, res) => {
  const { id } = req.params;
  const { title, discription } = req.body;
  db.query("UPDATE skills SET title = ?, discription = ? WHERE id = ?", [title, discription, id])
    .then((result) => res.send(result))
    .catch((error)=>console.log(error))
}
const deleteSkill = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM skills WHERE id = ?", [id])
  .then((result)=>res.send(result))
  .catch((error)=>console.log(error))
}


  
  module.exports = { 
  selectAll,
  selectOne,
  addSkill,
  updateSkill,
  deleteSkill,
 };
