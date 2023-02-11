const db = require("../database-mysql");

const selectAll = function (req, res) {
  db.query("SELECT * FROM skill")
  .then((result)=>{res.send(result[0])
  })    
  .catch((err)=>console.log(err))};

const selectAllWithRelation = function (req, res) {
  db.query("SELECT * FROM skill INNER JOIN step ON skill.skillId = step.skillId")
  .then((result)=>{res.send(result[0])
  })    
  .catch((err)=>console.log(err))};

const selectOne = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM skill WHERE id = ? ",[id])
  .then((result)=>res.send(result[0]))    
  .catch((err)=>console.log(err))
};
const addSkill = (req, res) => {
  const { skillTitle } = req.body;
  db.query("INSERT INTO skill (skillTitle) VALUES (?)", [skillTitle])
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
};

const updateSkill = (req, res) => {
  const { id } = req.params;
  const { skillTitle, discription } = req.body;
  db.query("UPDATE skill SET skillTitle = ?, discription = ? WHERE id = ?", [skillTitle, discription, id])
    .then((result) => res.send(result))
    .catch((error)=>console.log(error))
}
const deleteSkill = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM skill WHERE id = ?", [id])
  .then((result)=>res.send(result))
  .catch((error)=>console.log(error))
}


  
  module.exports = { 
  selectAll,
  selectOne,
  addSkill,
  updateSkill,
  deleteSkill,
  selectAllWithRelation
 };
