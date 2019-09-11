const Task = require('./models');

module.exports ={
    index:(request,response) =>{
        Task.find({}).sort({createdAt:1})
        .then(All_Task =>{
            console.log("HERE");
            response.json(All_Task);
        })
        .catch(err => response.json(err))
    },
    
    new_task:(request, response) =>{
        Task.create(request.body)
        .then(New_Tesk =>response.json(New_Tesk))
        .catch(err => response.json(err))   
    },

    one_task:(request, response) =>{
        console.log("One Task");

    }

}
    