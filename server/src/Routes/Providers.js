const router = require('express').Router()
const imageUpload = require('../Controller/Providers/ImageUpload')

router.post('/post/profileImage', imageUpload)

module.exports = router
