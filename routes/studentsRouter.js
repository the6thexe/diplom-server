const Router = require('express')
const studentController = require('../controllers/studentController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',  checkRole('admin'),  studentController.create)
router.get('/', studentController.getAll)
router.get('/:id', studentController.getOne)
router.delete('/:id', checkRole('admin'), studentController.deleteOne)


module.exports = router