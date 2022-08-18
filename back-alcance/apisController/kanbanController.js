const Kanban = require('../models/Kanban')
const Project = require('../models/Project')

const kanbanController = {
    createKanban: async (req, res) => {
    const kanban = new Kanban({
      title: req.body.title,
      category: req.body.category,
      tasks: req.body.tasks,
      projectId: req.body.projectId
    })

    let idKanbanProject
    let project = await Project.findById(req.body.projectId)
    if(project.kanban.length){
      idKanbanProject = project.kanban
      idKanbanProject.push(kanban.id)
    } else {
      idKanbanProject = kanban.id
    }
    console.log(idKanbanProject)
    const kanbanId = { kanban : idKanbanProject }
    await Project.findByIdAndUpdate(req.body.projectId, kanbanId)
    
    try {
      await kanban.save()
      const response = {
        meta: {
          status: 200,
          url:'/api/v1/kanban',
          total: kanban.length,           
        },
        data: kanban              
      }
      res.json(response)
    } catch (error) {
      res.send(error)
    }
    },
    listKanban: async (req, res) => {    
      Kanban.find({}, (error, kanban) => {
        if (error) {
        res.send(error)
        } else {
          const response = {
            meta: {
              status: 200,
              url:'/api/v1/kanban/list',
              total: kanban.length,           
             },
            data: kanban              
          }
          res.json(response)
        }
      }).sort({ _id: -1 })
    },
    findOneKanban : async(req, res) =>{
    const kanban = await Kanban.findById(req.params.id)
    const response = {
      meta: {
        status: 200,
        url:'/api/v1/kanban/:id/detail',
        total: kanban.length,           
      },
      data: kanban              
    }
    res.json(response)
    },
    editKanban : async (req, res) =>{
      const { title, category} = req.body;
      let kanbanEdit = await Kanban.findById(req.params.id)
      
      const kanbanEdited = { title, category }
      await Kanban.findByIdAndUpdate(req.params.id, kanbanEdited)
      res.json({status : 'Kanban updated'}) 
    },
    deleteKanban : async (req, res)=>{
      await Kanban.findByIdAndDelete(req.params.id);
      res.json({status : 'Kanban deleted'})
    }
}

module.exports = kanbanController;
