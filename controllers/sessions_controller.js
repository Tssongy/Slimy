const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/', (req, res) => {
  const {email, password} = req.body
  User
    .findByEmail(email)
    .then(user => {
      if(user) {
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)
        if (isValidPassword) {
          req.session.userID = user.id
          res.status(200).json({UserName: user.name})
        }
        else {
          res.status(422).json({ message: 'invalid email or password'})
        }
      }
      else {
        res.status(422).json({ message: 'invalid email or password'})
      }
    })
})

module.exports = router