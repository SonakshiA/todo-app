const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    }
},{timestamps:true});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;