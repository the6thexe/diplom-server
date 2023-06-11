const Router = require('express')
const router = new Router()
const SpecController = require('../controllers/specController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/',  checkRole('admin'), SpecController.create)
router.get('/', SpecController.getAll)
router.get('/:id', SpecController.getOne)
router.delete('/:id', checkRole('admin'), SpecController.deleteOne)

module.exports = router