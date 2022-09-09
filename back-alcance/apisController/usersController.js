const User = require("../models/User");
const Usuario = require("../models/Usuario");
const Project = require("../models/Project");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const usersController = {
  registerProcess: async (req, res) => {
    let hash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new Usuario({
      username: req.body.username,
      password: hash,
      role: "user",
      email: req.body.email,
      country: req.body.country,
    });
    try {
      await user.save();
      const response = {
        meta: {
          status: 200,
          url: "/api/v1/users/register",
          total: user.length,
        },
        data: user,
      };
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  },
  loginProcess: (req, res) => {
    Usuario.findOne({ email: req.body.email }, (error, user) => {
      if (error) {
        res.send(error);
      } else {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const response = {
              meta: {
                status: 200,
                url: "/api/v1/users/",
                total: user.length,
                msg: "Login success",
              },
              data: user,
            };
            res.json(response);
          } else {
            res.json({
              msg: "Password incorrecto",
            });
          }
        } else {
          res.send("Usuario no encontrado");
        }
      }
    }).sort({ _id: -1 });
  },
  userList: (req, res) => {
    Usuario.find({}, (error, users) => {
      if (error) {
        res.json(error);
      } else {
        const response = {
          meta: {
            status: 200,
            url: "/api/v1/users/list",
            total: users.length,
          },
          data: users,
        };
        res.json(response);
      }
    }).sort({ _id: -1 });
  },
  findOneUser: async (req, res) => {
    const user = await Usuario.findById(req.params.id);
    const response = {
      meta: {
        status: 200,
        url: "/api/v1/users/:id/detail",
        total: user.length,
      },
      data: user,
    };
    try {
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  },
  userEdit: async (req, res) => {
    const { username, password, role, email, country, projectId } = req.body;

    let userProjects;
    let userEdit = await Usuario.findById(req.params.id);
    if (projectId == null) {
      userProjects = userEdit.projectId;
    } else {
      userProjects = userEdit.projectId;
      userProjects.push(projectId);
    }

    const editUser = {
      username,
      password,
      role,
      email,
      country,
      projectId: userProjects,
    };
    try {
      await Usuario.findByIdAndUpdate(req.params.id, editUser);
      res.json({ status: "User updated" });
    } catch (error) {
      res.send(error);
    }
  },
  userDelete: async (req, res) => {
    try {
    const user = await Usuario.findById(req.params.id);
    projectsOfUser = [];
    user.projectId.forEach((project) => {
      projectsOfUser.push(project);
    });

    async function deletedUserForProjects() {
      projectsOfUser.forEach((project) => {
        Project.findById(project)
          .then(function (result) {
            let projectFind = result;
            let userIndex = projectFind.users.indexOf(req.params.id);
            projectFind.users.splice(userIndex, 1);
            let userProjectUpdated = { users: projectFind.users };

            Project.findByIdAndUpdate(project, userProjectUpdated).then(
              function () {}
          );
        });
      });
    }
    deletedUserForProjects();

      await Usuario.findByIdAndDelete(req.params.id);
      res.json({
        status: "User deleted",
        msg: "User deleted in this projects" + projectsOfUser,
      });
    } catch (error) {
      res.send(error);
    }
  },

  findProject: async (req, res) => {
    try {
      const user = await Usuario.findById(req.params.id);
      const response = {
        meta: {
        status: 200,
        url: "/api/v1/users/:id/p",
        total: user.length,
        },
        proyectos: user.projectId,
    };
    res.json(response);   
    } catch (error) {
      res.send(error);
    }
  }
};

module.exports = usersController;
