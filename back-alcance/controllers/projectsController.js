const Project = require('../models/Project')

const projectsController = {
  createProject: async (req, res) => {
    const project = new Project({
      name: req.body.name,
      uuidv4: '123456' + Math.random(),
      users: req.body.users,
      calendars: req.body.calendars,
      notes: req.body.notes
    })
    try {
      await project.save()
      res.send(project)
    } catch (error) {
      res.send(error)
    }
  },
  listProject: async (req, res) => {    
        Project.find({}, (error, projects) => {
            if (error) {
            res.send(error)
            } else {
            res.send(projects)
            }
        }).sort({ _id: -1 })
  },
  findOneProject : async(req, res) =>{
    const project = await Project.findById(req.params.id)
    res.json({status: project})
  },
  editProject : async (req, res) =>{
    const { name, uuidv4, users, calendars, notes } = req.body;
    const newProject = { name, uuidv4, users, calendars, notes }
   
    await Project.findByIdAndUpdate(req.params.id, newProject)
    res.json({status : 'Project updated'}) 
  },
  deleteProject : async (req, res)=>{
    await Project.findByIdAndDelete(req.params.id);
    res.json({status : 'Project deleted'})
}
}

module.exports = projectsController;
