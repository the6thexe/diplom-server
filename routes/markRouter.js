const Router = require('express')
const router = new Router()
const MarkController = require('../controllers/markController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('admin', 'teacher'),  MarkController.create)
router.get('/', MarkController.getAll)
router.get('/:id', MarkController.getOne)
router.get('/studentMarks/:id', MarkController.getAllStudentMarks)
router.delete('/:id', checkRole('admin'), MarkController.deleteOne)

module.exports = router