const { Router } = require("express") //Import the Router from within express itself

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router(); //I initialize the Router in this constant

function myMiddleware(request, response, next) {
    console.log('Você passou pelo Middleware');

    if(!request.body.isAdmin) {
        return response.json({message: "user unauthorized"})
    }

    next();
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes;