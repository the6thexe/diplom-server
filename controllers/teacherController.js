const { json } = require('sequelize')
const { Teacher } = require('../models/models')

class TeacherController {
    async create(req, res) {
        const { name, login, password } = req.body

        const teacher = await Teacher.create({ name, login, password })

        return res.json(teacher)
    }

    async getAll(req, res) {
        const teachers = await Teacher.findAll()
        return res.json(teachers)
    }

    async getOne(req, res) {
        const { id } = req.params
        const teacher = await Teacher.findOne(
            { where: { id } },
        )
        return res.json(teacher)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        Teacher.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log("Данные удалены")
        }).catch((error) => {
            console.log("Ошибка удаления данных студентов: ", error)
        })
    }
}


module.exports = new TeacherController()