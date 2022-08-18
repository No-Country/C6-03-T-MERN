const Task = require('../Models/Task');
const Kanban = require('../models/Kanban')

const tasksController = {
    listTask : async (req, res) =>{
        const task = await Task.find();
        const response = {
            meta: {
              status: 200,
              url:'/api/v1/tasks',
              total: task.length,           
            },
            data: task              
          }
        res.json(response);
    },
    createTask : async (req, res) =>{
        const task = new Task({ 
            title : req.body.title,
            description : req.body.description,
            endTime : req.body.endTime,
            kanbanId : req.body.kanbanId,
            userId : req.body.userId,
            difficulty: req.body.difficulty,
            taskState : req.body.taskState
        })
        await task.save();
        const response = {
          meta: {
            status: 200,
            url:'/api/v1/tasks',
            total: task.length,           
          },
          data: task              
        }
        
        const kanban = await Kanban.findById(req.body.kanbanId)
        let kanbanTasksId
        if(kanban.tasks != undefined){
          kanbanTasksId = kanban.tasks;
        }
        kanbanTasksId.push(task.id);

        const taskId = { tasks : kanbanTasksId }
        await Kanban.findByIdAndUpdate(req.body.kanbanId, taskId) 
        res.json(response);
    },
    editTask : async (req, res) =>{
        const { title, description, endTime, userId, difficulty, taskState } = req.body;
        
        let userTasks
        const taskEdit = await Task.findById(req.params.id)
        if(taskEdit.userId != null){
          userTasks = taskEdit.userId
          userTasks.push(userId)
        } else {
          userTasks = userId;
        }
        
        const newTask = { title, description, endTime, userId:userTasks, difficulty, taskState }
        await Task.findByIdAndUpdate(req.params.id, newTask)
        res.json({status : 'Task updated'}) 
    },
    deleteTask : async (req, res)=>{
      const task = await Task.findById(req.params.id)
      const kanban = await Kanban.findById(task.kanbanId)
      
      let taskIndex = kanban.tasks.indexOf(req.params.id)
      kanban.tasks.splice(taskIndex, 1)
      const taskKanbanUpdated = { tasks : kanban.tasks }

      await Kanban.findByIdAndUpdate(task.kanbanId, taskKanbanUpdated)
      await Task.findByIdAndDelete(req.params.id);
      res.json({status : 'Task deleted and Kanban updated'})
    },
    findOneTask : async(req, res) =>{
        const task = await Task.findById(req.params.id)
        const response = {
            meta: {
              status: 200,
              url:'/api/v1/tasks/:id/detail',
              total: task.length,           
            },
            data: task              
          }
        res.json(response);
    }   
}

module.exports = tasksController;