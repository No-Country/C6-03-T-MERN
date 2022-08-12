const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersController = {
  registerProcess: async (req, res) => {
    let hash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      password: hash,
      role: 'user',
      email: req.body.email,
      country: req.body.country
    })
    try {
      await user.save()
      res.json({
        user: user,
        msg: 'User created'
      })
    } catch (error) {
      res.send(error)
    }
  },
  loginProcess: (req, res) => {
    User.findOne({ email: req.body.email }, (error, user) => {
      if (error) {
        res.send(error)
      } else {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json({
              user: user,
              msg: 'Login success'
            })
          } else {
            res.json({
              msg: 'Password incorrecto'
            })
          }
        } else {
          res.send('Usuario no encontrado')
        }
      }
    }).sort({ _id: -1 })
  },
  userList: (req, res) => {
    User.find({}, (error, users) => {
      if (error) {
        res.json(error)
      } else {
        res.json(users)
      }
    }).sort({ _id: -1 })
  },
  findOneUser: async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json({
      user: user
    })
  },
  userEdit: async (req, res) => {
    const { username, password, role, email, country } = req.body;
    const editUser = { username, password, role, email, country }

    await User.findByIdAndUpdate(req.params.id, editUser)
    res.json({ status: 'User updated' })
  },
  userDelete: async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ status: 'User deleted' })
  }
}

module.exports = usersController;
