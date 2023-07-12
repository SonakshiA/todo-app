const express = require('express');
const Task = require('../model/task');
const router = express.Router();


router.get('/',(req,res)=>{
    res.redirect('/tasks');
});

router.get('/tasks',(req,res)=>{
    Task.find().sort({priority: 1}).then(result => {
        res.render('main',{tasks:result})
    }).catch(err => {
        console.log(err);
    })
})

router.get('/tasks',(req,res)=>{
    res.render('main');
});

router.post('/tasks',(req,res) => {
    const t = new Task(req.body);
    console.log(req.body);
    t.save().then(result => {res.redirect('/tasks')}).catch((err) => console.log(err));

})

router.get('/delete/:id',(req,res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id).then(() => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;

