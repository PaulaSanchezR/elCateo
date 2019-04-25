const express = require('express');
const treeRecordRouter = express.Router();
const mongoose = require('mongoose');

const TreeTask = require('../models/tasktree');
const Tree     = require ('../models/tree');
const TreeRecord = require('../models/tree-record');
const Illness = require('../models/illness');


//============= New Tree Record

treeRecordRouter.post('/treerecord/:idtree', (req,res,next) =>{
   console.log('id', req.params.idtree);
  // valid if the id is valid for mongoose
  if (!mongoose.Types.ObjectId.isValid(req.params.idtree)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

const { irrigation, 
         irrigationdescription, 
         soilhelth,
         soildescription, 
         salt,
         saltdescription,
         illness,
         illnessdescription
      } = req.body;
  
  TreeRecord.create({
        treeId: req.param.idtree,
        irrigation, irrigationdescription , soilhelth,    soildescription,
        salt, saltdescription, illness ,  illnessdescription
     })
     .then(newTreeRecord =>{
           res.status(200).json(newTreeRecord)
     } )
     .catch(err => {
       res.json(err)
     })
 })

// ==== List Records for an specific tree
treeRecordRouter.get('/treerecord/:id', (res,req,next)=>{
   if (!mongoose.Types.ObjectId.isValid(req.params.idtree)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }

    TreeRecord.findById(req.param.idtree)
    .populate(Tree)
    .populate(Illness)
    .then()
    .catch()
})


module.exports = treeRecordRouter;




