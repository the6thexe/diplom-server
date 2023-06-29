const { Discipline, Group } = require('../models/models')
const ApiError = require('../error/ApiError')

class DisciplineController {
    async create(req, res) {
        const { name, groupId, teacherId } = req.body
        const discipline = await Discipline.create({ name, groupId, teacherId })
        return res.json(discipline)
    }

    async getAll(req, res) {
        const disciplines = await Discipline.findAll()
        return res.json(disciplines)
    }

    async getOne(req, res) {
        const { id } = req.params
        const discepline = await Discipline.findOne(
            { where: { id } },
        )
        return res.json(discepline)
    }

    async getAllTeacherDisciplines(req, res) {
        const { id } = req.params
        const disciplines = await Discipline.findAll({
            where: {
                teacherId: id,
            },
            include: [
                {model: Group}
            ]
        })
        return res.json(disciplines)
    }
    
    async deleteOne(req, res) {
        const { id } = req.params
        Discipline.destroy({
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

module.exports = new DisciplineController()