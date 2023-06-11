const Router = require('express')
const router = new Router()
const GroupController = require('../controllers/groupController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('admin'),  GroupController.create)
router.get('/', GroupController.getAll)
router.get('/:id', GroupController.getOne)
router.delete('/:id', checkRole('admin'), GroupController.deleteOne)

module.exports = router