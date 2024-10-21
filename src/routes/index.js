const {  Router } = require("express"); //Import from express

const usersRouter = require("./users.routes"); //To pull the file from the routes folder
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");

const routes = Router(); //To Initialize the Router imported from express
routes.use("/users", usersRouter)//When someone accesses /users it will forward to the usersRouter route
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes;