const router = require('express').Router()
const imageUpload = require('../Controller/Providers/ImageUpload')
const Registeration = require('../Controller/Providers/Registeration')
router.post('/post/provider/uploadImageResume', imageUpload)
router.post('/post/provider/register', Registeration)

module.exports = router
