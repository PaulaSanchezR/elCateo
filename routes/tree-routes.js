const express = require('express');
const treeRouter = express.Router();
const mongoose =  require('mongoose');


const Tree     = require ('../models/tree');


// ==== NEW TREE
treeRouter.post('/tree', (req,res, next)=> {
  console.log("todo",req.body)
const {position,latitud,altitud,name,description} =req.body ;

if(position ===''|| latitud ==='' || altitud === ''){
  res.status(401).json({ message:" position, latitud and altitud are require"})
  return;
}
  Tree.create({position,latitud,altitud,name,description })
  .then(treeInf => {
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