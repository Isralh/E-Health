const router = require('express').Router()
const SignUp = require('../Controller/NewsLetters/Signup')

router.post('/signup/newsletters', SignUp)

module.exports = router
