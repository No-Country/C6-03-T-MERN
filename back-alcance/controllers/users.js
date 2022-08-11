const User = require('../Models/User')

const controller = {
  create: (req, res) => {
    const user = new User({
      username: 'Juan' + Math.floor(Math.random() * 1000),
      email: 'pepe' + Math.random() + '@gmail.com',
      password: '123456',
      role: 'user',
      country: 'Argentina'
    })
    try {
      user.save()
      res.send(user)
    } catch (error) {
      res.send(error)
    }
  },
  list: (req, res) => {    
        User.find({}, (error, users) => {
            if (error) {
            res.send(error)
            } else {
            res.send(users)
            }
        }).sort({ _id: -1 })
        }

}

module.exports = controller
