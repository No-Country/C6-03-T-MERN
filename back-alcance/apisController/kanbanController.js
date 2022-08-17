const Kanban = require('../models/Kanban')

const kanbanController = {
    createKanban: async (req, res) => {
    const kanban = new Kanban({
      title: req.body.title,
      category: req.body.category,
      tasks: req.body.tasks,
      projectId: req.body.projectId
    })
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
      const { title, category, tasks } = req.body;
      let kanbanEdit = await Kanban.findById(req.params.id)

      let kanbanTasks
      if(req.body.tasks == null){
        kanbanTasks = kanbanEdit.tasks
      } else {
        kanbanTasks = kanbanEdit.tasks;
        kanbanTasks.push(tasks);
      }
      
      const newKanban = { title, category, tasks:kanbanTasks }
      await Kanban.findByIdAndUpdate(req.params.id, newKanban)
      res.json({status : 'Kanban updated'}) 
    },
    deleteKanban : async (req, res)=>{
      await Kanban.findByIdAndDelete(req.params.id);
      res.json({status : 'Kanban deleted'})
    }
}

module.exports = kanbanController;
