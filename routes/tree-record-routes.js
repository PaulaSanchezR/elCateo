const express = require('express');
const treeRecordRouter = express.Router();
const mongoose = require('mongoose')

const TreeTask = require('../models/tasktree');
const Tree     = require ('../models/tree');
const TreeRecord = require('../models/tree-record')


//============= New Record

treeRecordRouter.post('/treerecord/:idtree', (req,res,next) =>{
  console.log('id', req.params.idtree);
  // valid if the id is valid for mongoose
  if (!mongoose.Types.ObjectId.isValid(req.params.idtree)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  TreeRecord.find({treeId:req.param.idtree})
  .populate('tree')
  .then(record =>{
      treeRecordRouter.create({
        treeId: req.param.idtree,
        irrigation: req.body.irrigation, 
        irrigationdescription: req.body.irrigationdescription ,
        soilhelth: req.body.soilhelth ,
        soildescription: req.body.soildescription,
        salt: req.body.salt,
        saltdescription: req.body.saltdescription,
        illness: req.body.illness ,
        illnessdescription: req.body.illnessdescription
     })
     .then(newTreeRecord =>{
          res.status(200).json(newTreeRecord)
     } )
     .cath(err => {
       res.json(err)
     })
   
    
  })
  .catch(err =>{
    res.json(err);
  })
})

module.exports = treeRecordRouter;