const e = require("express");
const db = require("../database-mysql");

const selectAll = function (req, res) {
  db.query("SELECT * FROM skill")
  .then((result)=>{res.send(result[0])
  })    
  .catch((err)=>console.log(err))};

  const selectOne = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM skill WHERE skillId = ? ", [id])
      .then((result) => res.send(result[0]))
      .catch((err) => console.log(err));
  };
const selectAllWithRelation = function (req, res) {
  db.query("SELECT skill.skillId, skill.skillTitle, step.stepId, step.stepTitle , step.checked FROM users LEFT JOIN skill ON users.userId = skill.userId LEFT JOIN step ON skill.skillId = step.skillId WHERE users.userId = 2;")
  .then((result)=>{
    const arr = []
    result[0].forEach(element => {
      let condition;
      arr.forEach(e => {
        if(element.skillTitle === e.skillTitle){
          condition = true;
            e.steps.push({title: element.stepTitle, id :element.stepId, checked : element.checked})
        }
      });
      if(!condition){
        let obj = element
        obj.steps = [{title: element.stepTitle, id :element.stepId, checked : element.checked}]
        delete obj.stepId
        delete obj.stepTitle
        delete obj.checked
          arr.push(obj)
      }
    });
    res.send(arr)
  })    
  .catch((err)=>console.log(err))};


const addSkill = (req, res) => {
  const { skillTitle,userId } = req.body;
  db.query("INSERT INTO skill (skillTitle,userId) VALUES (?,?)", [skillTitle,userId])
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
};

const updateSkill = (req, res) => {
  const { id } = req.params;
  const { skillTitle } = req.body;
  db.query("UPDATE skill SET skillTitle = ? WHERE skillId = ?", [skillTitle, id])
    .then((result) => res.send(result))
    .catch((error)=>console.log(error))
}
const deleteSkill = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM skill WHERE skillId = ?", [id])
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
