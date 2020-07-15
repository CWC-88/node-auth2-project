const router = require('express').Router()
const restricted = require('../auth/auth_restricted')
const authRouter = require('../auth/auth_router')
const userRouter = require('../users/router')


router.use('/auth', authRouter)
router.use('/user', restricted, userRouter)

router.get('/', (req, res) => {
    res.json({ api: 'api active' })
})

module.exports = router