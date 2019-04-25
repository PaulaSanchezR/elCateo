const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const taskTreeSchema = new Schema({
        datexecute:{type:String},
        datecreation: {type: Date},
        task: {type: String, enum:[]},
        description:{type:String},
        typetask : {type: String, enum:['Fertilizar','Irrigar','Illness'], default:'Fertilizar'},
   },{
        timestamps: {createdAt:"created_at",updateAt:"update_at"}
    });

const TaskTree = mongoose.model("Tasktree" , taskTreeSchema);

module.exports = TaskTree;