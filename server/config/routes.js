const Model = require('./../controllers/models');

module.exports = (app) => {
    app.post('/new/:title/:description', Model.create)
    app.get('/tasks/find/:id', Model.get_by_id)
    app.put('/tasks/update/:id', Model.update)
    app.delete('/tasks/delete/:id', Model.delete)

}