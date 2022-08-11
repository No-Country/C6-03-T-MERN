const Project = require('../Models/Project')

const controller = {
  create: (req, res) => {
    const project = new Project({
      name: 'Proyecto' + Math.floor(Math.random() * 1000),
      uuidv4: '123456' + Math.random(),
      users: [],
      calendars: [],
      notes: []
    })
    try {
      project.save()
      res.send(project)
    } catch (error) {
      res.send(error)
    }
  },
  list: (req, res) => {    
        Project.find({}, (error, projects) => {
            if (error) {
            res.send(error)
            } else {
            res.send(projects)
            }
        }).sort({ _id: -1 })
    }      
}

module.exports = controller
