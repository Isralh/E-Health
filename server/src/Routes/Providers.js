const router = require('express').Router()
const imageUpload = require('../Controller/Providers/ImageUpload')
const registration = require('../Controller/Providers/Registration')
const allProviders = require('../Controller/Providers/AllProviders')
const getProviderByID = require('../Controller/Providers/GetProviderByID')
const getSchedule = require('../Controller/Providers/GetSchedule')

router.post('/post/provider/uploadImageResume', imageUpload)
router.post('/post/provider/register', registration)
router.get('/get/provider/AllProviders', allProviders)
router.get('/get/provider/schedule', getSchedule)
router.get('/get/provider/:id', getProviderByID)

module.exports = router
