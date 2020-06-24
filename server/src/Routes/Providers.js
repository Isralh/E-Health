const router = require('express').Router()
const imageUpload = require('../Controller/Providers/ImageUpload')
const Registration = require('../Controller/Providers/Registration')
const AllProviders = require('../Controller/Providers/AllProviders')
const GetProviderByID = require('../Controller/Providers/GetProviderByID')
router.post('/post/provider/uploadImageResume', imageUpload)
router.post('/post/provider/register', Registration)
router.get('/get/provider/AllProviders', AllProviders)
router.get('/get/provider/:id', GetProviderByID)

module.exports = router
