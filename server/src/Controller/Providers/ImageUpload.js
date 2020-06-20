const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const awsConfig = require('../../Config/AwsConfig')

// configuration to handle image uploading to amazon web services
aws.config.update({
  secretAccessKey: awsConfig.secretAccessKey,
  accessKeyId: awsConfig.accessKeyId,
  region: awsConfig.region
})
const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: awsConfig.bucketName,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
}).array('uploadFiles', 2)
const imageupload = async (req, res) => {
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

module.exports = imageupload
