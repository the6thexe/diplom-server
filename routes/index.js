const Router = require('express')
const router = new Router()
const disceplineRouter = require('./disciplineRouter')
const groupRouter = require('./groupRouter')
const specRouter = require('./specRouter')
const studentsRouter = require('./studentsRouter')
const teachersRouter = require('./teachersRouter')
const userRouter = require('./userRouter')
const markRouter = require('./markRouter')


router.use('/user', userRouter)
router.use('/discipline', disceplineRouter)
router.use('/group', groupRouter)
router.use('/spec', specRouter)
router.use('/student', studentsRouter)
router.use('/teacher', teachersRouter)
router.use('/mark', markRouter)

module.exports = router