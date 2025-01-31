require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload")

const cors = require("cors")
const express = require("express"); //1- Stores everything that express uses from node_modules and within a variable.
const routes = require("./routes")

migrationsRun();
    
const app = express(); //2- Starting express
app.use(express.json());
app.use(cors());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);


app.use(( error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error)
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333; //3- What is the port address that the API will watch to send and receive requests
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
