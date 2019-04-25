const express = require('express');
const treeRouter = express.Router();
const mongoose =  require('mongoose');

const Group   = require('../models/group')
const Tree     = require ('../models/tree');


// ==== NEW TREE
treeRouter.post('/tree', (req,res, next)=> {
  console.log("todo",req.body)
const {position,latitud,altitud,name,description,groupId} =req.body ;

if(position ===''|| latitud ==='' || altitud === ''){
  res.status(401).json({ message:" position, latitud and altitud are require"})
  return;
}
  Tree.create({position,latitud,altitud,name,description,groupId })
  .then(treeInf => {
    // findig Group id then pushing the new tree into the group 
     Group.findById(groupId)
     .then(group=>{
       group.treeId.push(treeInf._id);
       group.save()
       .then(()=>res.json(group))
       .catch(err => next(err))

     })
     .catch()
        res.json({ treeInf });

  })
  .catch(err => {
    res.json(err)
  })
});




//====== DELETE TREE
treeRouter.delete('/tree/:id', (req, res, next) => {
  console.log("id", req.params.id)
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Tree.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Tree with ${req.params.id} is removed successfully.`,
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = treeRouter;