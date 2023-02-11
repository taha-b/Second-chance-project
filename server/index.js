const express = require("express");
const itemRoutes = require('./routes/skills.routes')
const userRoutes =require('./routes/info.Routes')
const signUpRoutes =require('./routes/users.routes')
const stepsRoutes = require('./routes/steps.Routes')
const cors = require('cors')



const db = require('./database-mysql');

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/skill", itemRoutes);
app.use("/api/userInf",userRoutes);
app.use("/api/users",signUpRoutes);
app.use("/api/step",stepsRoutes);


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
