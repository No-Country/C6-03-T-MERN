const Kanban = require('../models/Kanban')

const kanbanController = {
    viewCreateKanban : (req, res) => {

    },
    createKanban: async (req, res) => {
    const kanban = new Kanban({
      title: req.body.title,
      category: req.body.category,
      tasks: req.body.tasks,
    })
    try {
      await kanban.save()
      res.send(kanban)
    } catch (error) {
      res.send(error)
    }
    },
    listKanban: async (req, res) => {    
        Kanban.find({}, (error, kanban) => {
            if (error) {
            res.send(error)
            } else {
            res.send(kanban)
            }
        }).sort({ _id: -1 })
    },
    findOneKanban : async(req, res) =>{
    const kanban = await Kanban.findById(req.params.id)
    res.json({status: kanban})
    },
    editKanban : async (req, res) =>{
    const { title, category } = req.body;
    const newKanban = { title, category }
   
    await Kanban.findByIdAndUpdate(req.params.id, newKanban)
    res.json({status : 'Kanban updated'}) 
    },
    deleteKanban : async (req, res)=>{
    await Kanban.findByIdAndDelete(req.params.id);
    res.json({status : 'Kanban deleted'})
    }
}

module.exports = kanbanController;
