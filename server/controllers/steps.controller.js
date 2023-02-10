const db = require("../database-mysql");

const getSteps = (req, res) => {
    db.query("SELECT * FROM steps ")
    .then((result)=>res.send(result[0]))
    .catch((error)=>console.log)
    };

    const addStep = (req, res) => {
        const { title,checked } = req.body;
        db.query("INSERT INTO steps (title,checked) VALUES (?,?)", [title,checked])
          .then((result) => res.send(result))
          .catch((error) => console.log(error));
      };
    
    const updateStep = (req, res) => {
    const id = req.params.id;
    const { title} = req.body;
    db.query("UPDATE steps SET title = ? WHERE id = ?", [title,id])
    .then((result)=>res.send(result))
    .catch((error)=>console.log(error))
    };

    const deleteStep = (req, res) => {
        const { id } = req.params;
        db.query("DELETE FROM steps WHERE id = ?", [id])
        .then((result)=>res.send(result))
        .catch((error)=>console.log(error))
      }

module.exports = {
getSteps,
addStep,
updateStep,
deleteStep
}