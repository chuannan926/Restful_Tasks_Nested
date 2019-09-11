const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks', controller.index)
    app.get('/task/:num', controller.one_task)
    app.post('/new', controller.new_task)

}