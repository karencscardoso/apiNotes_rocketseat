const sqlite3 = require("sqlite3"); //Esse é o drive de conexão
const sqlite = require("sqlite");//Esse é o responsável pra conectar o drive de conexão
const path = require("path");

async function sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });
    
    return database;
}

module.exports = sqliteConnection;