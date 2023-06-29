const Router = require('express')
const router = new Router()
const DisciplineController = require('../controllers/disciplineController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('admin'),  DisciplineController.create)
router.get('/', DisciplineController.getAll)
router.get('/:id', DisciplineController.getOne)
router.get('/teacherDisciplines/:id', DisciplineController.getAllTeacherDisciplines)
router.delete('/:id', checkRole('admin'), DisciplineController.deleteOne)

module.exports = router