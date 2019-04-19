const express = require('express');
const treeRouter = express.Router();

const TreeTask = require('../models/tasktree');
const Tree     = require ('../models/tree');


// Post route => to create a new tree
treeRouter.post('/tree', (req,res, next)=> {
  Tree.create({
    position: req.body.title,
    name: req.body.name,
    description:req.body.description
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
});


//delete route => to create a tree record
treeRouter.delete('/tree/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is removed successfully.`,
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = treeRouter;