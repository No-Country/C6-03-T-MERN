const Project = require('../models/Project')
const Kanban = require('../models/Kanban')
const Notes = require('../models/Note')
const Task = require('../models/Task')

const projectsController = {
  createProject: async (req, res) => {
    const project = new Project({
      name: req.body.name,
      uuidv4: '123456' + Math.random(),
      users: req.body.users,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      notes: req.body.notes,
      kanban: req.body.kanban
    })
    try {
      await project.save()
      const response = {
        meta: {
          status: 200,
          url:'/api/v1/projects/create',
          total: project.length,           
        },
        data: project              
      }
      res.json(response)
    } catch (error) {
      res.send(error)
    }
  },
  listProject: async (req, res) => {    
    Project.find({}, (error, projects) => {
      if (error) {
        res.send(error)
      } else {
        const response = {
          meta: {
            status: 200,
            url:'/api/v1/projects/list',
            total: projects.length,           
          },
          data: projects              
        }
        res.json(response)
      }
    }).sort({ _id: -1 })
  },
  findOneProject : async(req, res) =>{
    const project = await Project.findById(req.params.id)
    const response = {
      meta: {
        status: 200,
        url:'/api/v1/projects/:id',
        total: project.length,           
      },
      data: project              
    }
    res.json(response)
  },
  editProject : async (req, res) =>{
    const { name, users, startTime, endTime, notes, kanban } = req.body;
    let projectEdit = await Project.findById(req.params.id)

    let projectUsers
    if(req.body.users == null){
      projectUsers = projectEdit.users
    } else {
      projectUsers = projectEdit.users;
      projectUsers.push(users);
    }
    
    let projectKanban
    if(req.body.kanban == null){
      projectKanban = projectEdit.kanban
    } else {
      projectKanban = projectEdit.kanban;
      projectKanban.push(kanban);
    }

    let projectNotes
    if(req.body.notes == null){
      projectNotes = projectEdit.notes
    } else {
      projectNotes = projectEdit.notes;
      projectNotes.push(notes);
    }
    
    const newProject = { name:name, users:projectUsers, startTime: startTime, endTime:endTime, kanban:projectKanban, notes:projectNotes }
    await Project.findByIdAndUpdate(req.params.id, newProject)
    res.json({status : 'Project updated'}) 
  },
  deleteProject : async (req, res)=>{
    const project = await Project.findById(req.params.id)
    kanbanOfProject = []
    project.kanban.forEach(kanban => {
      kanbanOfProject.push(kanban)
    })
    console.log('////Estos son los kanbanId del proyecto: ' + kanbanOfProject)
    async function findTaskForKanban(){
      kanbanOfProject.forEach(kanban =>{
          let kanbanFind = Kanban.findById(kanban)
          .then(function(result){
            let tasksForKanban = result.tasks
            console.log('////Estos son los id de las tasks encontradas: ' + tasksForKanban)
            tasksForKanban.forEach(taskForDelete =>{
              console.log('Esta es la tarea a eliminar ' + taskForDelete)
              Task.findByIdAndDelete(taskForDelete)
              .then(function(){
              })
            })
          })
      })
    }
    findTaskForKanban();
    
    let kanbanForProject = project.kanban
    async function deletedKanban(){
      kanbanForProject.forEach(kanban =>{
          Kanban.findByIdAndDelete(kanban)
          .then(function(){
          })
      })
    }
    deletedKanban();

    let notesForProject = project.notes
    async function deletedNotes(){
      notesForProject.forEach(notes =>{
          Notes.findByIdAndDelete(notes)
          .then(function(){
          })
      })
    }
    deletedNotes();

    await Project.findByIdAndDelete(req.params.id);
    res.json({status : 'Project deleted'})
}
}

module.exports = projectsController;
