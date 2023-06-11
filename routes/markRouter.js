const Router = require('express')
const router = new Router()
const MarkController = require('../controllers/markController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('admin'),  MarkController.create)
router.get('/', MarkController.getAll)
router.get('/:id', MarkController.getOne)
router.delete('/:id', checkRole('admin'), MarkController.deleteOne)

module.exports = router