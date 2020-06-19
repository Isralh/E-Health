const router = require('express').Router()

router.get('/providers/register', (req, res) => {
  res.send({ name: 'Isral' })
})

module.exports = router
