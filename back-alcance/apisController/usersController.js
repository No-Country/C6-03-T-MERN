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
      const response = {
        meta: {
          status: 200,
          url:'/api/v1/users/register',
          total: user.length,           
        },
        data: user              
      }
      res.json(response)
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
            const response = {
              meta: {
                status: 200,
                url:'/api/v1/users/',
                total: user.length,           
                msg: 'Login success'
              },
              data: user              
            }
            res.json(response)
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
        const response = {
          meta: {
            status: 200,
            url:'/api/v1/users/list',
            total: users.length,           
          },
          data: users              
        }
        res.json(response)
      }
    }).sort({ _id: -1 })
  },
  findOneUser: async (req, res) => {
    const user = await User.findById(req.params.id)
    const response = {
      meta: {
        status: 200,
        url:'/api/v1/users/:id/detail',
        total: user.length,           
      },
      data: user              
    }
    res.json(response)
  },
  userEdit: async (req, res) => {
    const { username, password, role, email, country, projectId } = req.body;
    
    let userProjects
    let userEdit = await User.findById(req.params.id)
    if(projectId == null){
      userProjects = userEdit.projectId
    } else {
        userProjects = userEdit.projectId;
        userProjects.push(projectId);
    }

    const editUser = { username:username, password:password, role:role, email:email, country:country, projectId:userProjects }
    await User.findByIdAndUpdate(req.params.id, editUser)
    res.json({ status: 'User updated' })
  },
  userDelete: async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ status: 'User deleted' })
  }
}

module.exports = usersController;
