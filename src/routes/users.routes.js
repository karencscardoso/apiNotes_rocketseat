const { Router } = require("express") //Import the Router from within express itself
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router(); //I initialize the Router in this constant
const upload = multer(uploadConfig.MULTER);

// function myMiddleware(request, response, next) {
//     console.log('Você passou pelo Middleware');

//     if(!request.body.isAdmin) {
//         return response.json({message: "user unauthorized"})
//     }

//     next();
// }

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;