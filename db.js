const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    "railway",
    "postgres",
    "FZrs08rNjRMn8XFq5hqc",
    {
        dialect: 'postgres',
        host: "containers-us-west-4.railway.app",
        port: "7548"
    }
) 