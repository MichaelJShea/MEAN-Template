const mongoose = require('mongoose');
const Model = mongoose.model('Model');

module.exports = {

    index: (req, res)=>{
        Model.find({}, (err, tasks)=>{
            if(err){
                res.json({success: false, error: err});
            } else {
                res.json({success: true, tasks: tasks})
            }
        })
    },
    create: (req, res)=> {
        console.log(req.method);
        console.log(req.params);
        let newModel;
        newModel= req.params;
        const model = new Model(newModel);
        model.save((err)=>{
            if(err){
                res.json({success: false, error: err})
            }
            else{
                res.json({success: true})
            }
        })
    },
    get_by_id: (req, res)=>{
        console.log(req.method);
        let id = req.params.id;
        Model.find({_id: id},(err,tasks)=>{
            if(err){
                res.json({success: false, error: err})
            }
            else{
                res.json({success: true, task: tasks})
            }
        })
    },

    update: (req, res)=>{
        console.log(req.method);
        let id = req.params.id;
        console.log(req.body);
        Model.update({_id:id},{title: req.body.title, description: req.body.description, completed: req.body.completed},(err)=>{
            if(err){
                res.json({success: false, error: err})
            }
            else{
                res.json({success: true});
            }
        })
    },

    delete: (req, res)=>{
        console.log(req.method);
        console.log("MADE IT TO SERVER", req.params)
        let id = req.params.id;
        Model.findByIdAndDelete(id, (err)=>{
            if(err){
                res.json({success: false, error: err})
            }
            else{
                res.json({success: true});
            }
        })
    }

}