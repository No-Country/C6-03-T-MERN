const Task = require('../Models/Task')


const tasksController = {
    listTask : async (req, res) =>{
        const task = await Task.find();
        res.json(task);
    },
    createTask : async (req, res) =>{
        const task = new Task({ 
            title : req.body.title,
            description : req.body.description,
            endTime : req.body.endTime,
            projectId : req.body.projectId,
            userId : req.body.userId,
            taskState : req.body.taskState
        })
        console.log(task)  
        await task.save();
        res.json({status: 'Task Save'})
    },
    editTask : async (req, res) =>{
        const { title, description, endTime, projectId, userId, taskState } = req.body;
        const newTask = { title, description, endTime, projectId, userId, taskState }

        await Task.findByIdAndUpdate(req.params.id, newTask)
        res.json({status : 'Task updated'}) 
    },
    deleteTask : async (req, res)=>{
        await Task.findByIdAndDelete(req.params.id);
        res.json({status : 'Task deleted'})
    },
    findOneTask : async(req, res) =>{
        const task = await Task.findById(req.params.id)
        res.json({status: task})
    }   
}

module.exports = tasksController;