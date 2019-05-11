const express = require('express');
const treeRecordRouter = express.Router();
const mongoose = require('mongoose');

const TreeTask = require('../models/tasktree');
const Tree     = require ('../models/tree');
const TreeRecord = require('../models/tree-record');
const Illness = require('../models/illness');


// ==== List Records 
treeRecordRouter.get('/listtreerecord', (req,res,next)=>{
  // console.log(req.params.idtreeRecord);
    TreeRecord.find()
    .populate('treeId')
    .populate('illness')
      .then(treeRecord =>{
        // console.log("record", treeRecord)
          res.status(200).json(treeRecord);
      })
      .catch(err => {
        res.status(500).json({ message:" Listing the Tree Record went wrong"});
      })
})

//============= New Tree Record

treeRecordRouter.post('/treerecord/:idtree', (req,res,next) =>{
   console.log('id', req.params.idtree);
  // valid if the id is valid for mongoose
  if (!mongoose.Types.ObjectId.isValid(req.params.idtree) && req.params.idtree === "") {
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
        treeId: req.params.idtree,
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
treeRecordRouter.get('/treerecord/:idtreeRecord', (req,res,next)=>{
  // console.log(req.params.idtreeRecord);
  if (!mongoose.Types.ObjectId.isValid(req.params.idtreeRecord)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    TreeRecord.find({'treeId':req.params.idtreeRecord})
    .populate('treeId')
    .populate('illness')
      .then(treeRecord =>{
        // console.log("record", treeRecord)
          res.status(200).json(treeRecord);
      })
      .catch(err => {
        res.status(500).json({ message:" Listing the Tree Record went wrong"});
      })
})




// DELETE /tree
treeRecordRouter.delete('/treerecord/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  TreeRecord.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log("deletetree ** ", tree)
      res.json({message: `You successfully deleted ${req.params.id} `})
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = treeRecordRouter;




