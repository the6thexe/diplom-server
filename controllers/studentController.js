const { Student } = require('../models/models')

class StudentController {
    async create(req, res) {
        const { name, groupId } = req.body

        const student = await Student.create({ name, groupId })

        return res.json(student)
    }

    async getAll(req, res) {
        const students = await Student.findAll()
        return res.json(students)
    }

    async getOne(req, res) {
        const { id } = req.params
        const student = await Student.findOne({
             where: { 
                id
            }
        })
        return res.json(student)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        Student.destroy({
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


module.exports = new StudentController()