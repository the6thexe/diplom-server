const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    /*"railway",
    "postgres",
    "FZrs08rNjRMn8XFq5hqc",
    {
        dialect: 'postgres',
        host: "containers-us-west-4.railway.app",
        port: "7548"
    }
    */
   process.env.DB_NAME,
   process.env.DB_USER,
   process.env.DB_PASSWORD,
   {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
   }
) 