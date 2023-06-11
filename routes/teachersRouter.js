const Router = require('express')
const teacherController = require('../controllers/teacherController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',  checkRole('admin'),  teacherController.create)
router.get('/', teacherController.getAll)
router.get('/:id', teacherController.getOne)
router.delete('/:id', checkRole('admin'), teacherController.deleteOne)

module.exports = router