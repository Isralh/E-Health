const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
require('dotenv').config()

// configuration to handle image uploading to amazon web services
aws.config.update({
  secretAccessKey: process.env.SECRETACCESSKEY,
  accessKeyId: process.env.ACCESSKEYID,
  region: process.env.REGION
})
const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKETNAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
}).array('uploadFiles', 2)
const imageUpload = async (req, res) => {
  const filesUrl = []
  upload(req, res, err => {
    if (err) { return res.status(200).send({ message: 'Error uploading the images' }) }
    const files = req.files
    for (let i = 0; i < files.length; i++) {
      filesUrl.push(files[i].location)
    }
    return res.status(201).send({ message: 'success', data: filesUrl })
  })
}

module.exports = imageUpload
