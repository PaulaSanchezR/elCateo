const express = require('express');
const treeRouter = express.Router();
const mongoose =  require('mongoose');

const Group   = require('../models/group')
const Tree     = require ('../models/tree');
const Illness = require ('./illness-routes')

// ==== LIST TREE ===

treeRouter.get('/tree',(req,res,next) =>{
  treeRouter.find()
  .then(tree => {

  })
  .cathc(err => {
    res.status(500).json({message:" Error listing Tree"})
  })

})

// ==== NEW TREE
treeRouter.post('/tree', (req,res, next)=> {
  console.log("todo",req.body)
const {position,latitud,altitud,name,description,groupId} =req.body ;

if (!mongoose.Types.ObjectId.isValid(groupId) && groupId === "") {
  res.status(400).json({ message: 'Group ID is not valid' });
  return;
}


if(position ===''|| latitud ==='' || altitud === ''){
  res.status(401).json({ message:" position, latitud and altitud are require"})
  return;
}
  Tree.create({position,latitud,altitud,name,description,groupId })
  .then(treeInf => {
    console.log("tree info===", treeInf)
    // findig Group id then pushing the new tree into the group 
     Group.findById(groupId)
     .then(group=>{
       console.log("group ===", group)
       group.treeId.push(treeInf._id);
       group.save()
       .then(()=>{
         res.json({group ,treeInf })
        })
       .catch(err => next(err))
     })
     .catch(err => next(err))
        
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