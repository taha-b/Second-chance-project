const db = require("../database-mysql");

const getUserSkillById = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM usersInformation WHERE id = ?", [id])
    .then((result)=>res.send(result[0]))
    .catch((error)=>console.log)
    };
    
    const updateUserSkill = (req, res) => {
    const id = req.params.id;
    const { fullName, adresseMail, phoneNumber, age, educations, experiences } = req.body;
    db.query("UPDATE usersInformation SET fullName = ?, adresseMail = ?, phoneNumber = ?, age = ?, educations = ?, experiences = ? WHERE id = ?", [fullName, adresseMail, phoneNumber, age, educations, experiences, id])
    .then((result)=>res.send(result))
    .catch((error)=>console.log(error))
    };

module.exports = {
getUserSkillById,
updateUserSkill 
}