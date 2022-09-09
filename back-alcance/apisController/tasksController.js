const Task = require('../models/Task');
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
        try{
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
        console.log(kanban)
        let kanbanTasksId
        if(kanban.tasks.length){
          kanbanTasksId = kanban.tasks;
        }
        kanbanTasksId.push(task.id);

        const taskId = { tasks : kanbanTasksId }
        await Kanban.findByIdAndUpdate(req.body.kanbanId, taskId) 
        res.json(response);

        } catch (error) {
          res.send(error);
        }
    },
    editTask : async (req, res) =>{
      const { title, description, endTime, userId, difficulty, taskState } = req.body;
        
      try{
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
      } catch (error) {
        res.send(error);
      }
    },
    deleteTask : async (req, res)=>{
      const task = await Task.findById(req.params.id)
      const kanban = await Kanban.findById(task.kanbanId)
      
      let taskIndex = kanban.tasks.indexOf(req.params.id)
      kanban.tasks.splice(taskIndex, 1)
      const taskKanbanUpdated = { tasks : kanban.tasks }
      try{
        await Kanban.findByIdAndUpdate(task.kanbanId, taskKanbanUpdated)
        await Task.findByIdAndDelete(req.params.id);
        res.json({status : 'Task deleted and Kanban updated'})
      } catch(error){
        res.send(error);
      }
    },
    findOneTask : async(req, res) =>{
       try{
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
        } catch(error){
        res.send(error);
        }
    }   
}

module.exports = tasksController;