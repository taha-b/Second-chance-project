const db = require("../database-mysql");

const getSteps = (req, res) => {
    db.query("SELECT * FROM step ")
    .then((result)=>res.send(result[0]))
    .catch((error)=>console.log)
    };

    const addStep = (req, res) => {
        const { stepTitle,checked, skillId } = req.body;
        db.query("INSERT INTO step (stepTitle,checked,skillId) VALUES (?,?,?)", [stepTitle,checked, skillId])
          .then((result) => res.send(result))
          .catch((error) => console.log(error));
      };
    
    const updateStep = (req, res) => {
    const id = req.params.id;
    const { stepTitle} = req.body;
    db.query("UPDATE step SET stepTitle = ? WHERE id = ?", [stepTitle,id])
    .then((result)=>res.send(result))
    .catch((error)=>console.log(error))
    };

    const deleteStep = (req, res) => {
        const { id } = req.params;
        db.query("DELETE FROM step WHERE id = ?", [id])
        .then((result)=>res.send(result))
        .catch((error)=>console.log(error))
      }

module.exports = {
getSteps,
addStep,
updateStep,
deleteStep
}