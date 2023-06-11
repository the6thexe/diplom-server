const { Mark } = require('../models/models')


class MarkController {
    async create(req, res) {
        const { mark, date, info, studentId, disciplineId } = req.body
        const m = await Mark.create({ mark, date, info, studentId, disciplineId  })
        return res.json(m)
    }

    async getAll(req, res) {
        const ms = await Mark.findAll()
        return res.json(ms)
    }

    async getOne(req, res) {
        const { id } = req.params
        const m = await Mark.findOne(
            { where: { id } },
        )
        return res.json(m)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        Mark.destroy({
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

module.exports = new MarkController()