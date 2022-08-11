const User = require('../models/User')

const controller = {
  create: async (req, res) => {
    const user = new User({
      username: 'Juan' + Math.floor(Math.random() * 1000),
      email: 'pepe' + Math.random() + '@gmail.com',
      password: '123456',
      role: 'user',
      country: 'Argentina'
    })
    try {
      await user.save()
      res.json(user)
    } catch (error) {
      res.send(error)
    }
  },
  list: (req, res) => {    
        User.find({}, (error, users) => {
            if (error) {
            res.json(error)
            } else {
            res.send(users)
            }
        }).sort({ _id: -1 })
        },

  login: (req, res) => {
    User.findOne({ email: req.body.email }, (error, user) => {
      if (error) {
        res.send(error)
      } else {
        if (user) {
          if (user.password === req.body.password) {
            res.send(user)
          } else {
            res.send('Password incorrecto')
          }
        } else {
          res.send('Usuario no encontrado')
        }
      }
    }).sort({ _id: -1 })
  }
}

module.exports = controller
