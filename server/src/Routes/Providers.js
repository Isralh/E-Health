const router = require('express').Router()
const imageUpload = require('../Controller/Providers/ImageUpload')
const Registration = require('../Controller/Providers/Registration')
const AllProviders = require('../Controller/Providers/AllProviders')
router.post('/post/provider/uploadImageResume', imageUpload)
router.post('/post/provider/register', Registration)
router.get('/get/provider/AllProviders', AllProviders)

module.exports = router
