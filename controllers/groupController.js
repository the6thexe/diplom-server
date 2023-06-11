const { Group } = require('../models/models')


class GroupController {
    async create(req, res) {
        const { groupId, specId } = req.body
        const group = await Group.create({ groupId, specId })
        return res.json(group)
    }

    async getAll(req, res) {
        const groups = await Group.findAll()
        return res.json(groups)
    }

    async getOne(req, res) {
        const { id } = req.params
        const group = await Group.findOne(
            { where: { id } },
        )
        return res.json(group)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        Group.destroy({
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

module.exports = new GroupController()