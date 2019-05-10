const express = require('express');
const groupRouter = express.Router();
const mongoose = require('mongoose')

const Group = require('../models/group')

// ===== ADD NEW GROUP
groupRouter.post('/group', (req,res,next) => {
   const { name } = req.body;
   if(name === ''){
     res.status(401).json ({ message: ' Require name '})
   }
   Group.findOne({ name}, (err,foundGroup)=>{
      if(err){
        res.status(500).json({ message: 'Groop Name check went bad'})
        return;
      }
      if(foundGroup){
        res.status(400).json({ message: 'The Group name is already take it'})
      }
      Group.create({ name })
        .then(newGroup => {
          res.json(newGroup)
        })
        .catch(err => {
          res.json(err)
        })

   }) 
});

groupRouter.get('/allgroup',(req,res,next) =>{
  Group.find()
  .then(listGroup =>{
     res.json(listGroup)
  })
  .catch(err => next(err) )
})

groupRouter.get('/treebygroup',(req,res,next) =>{
  Group.find({ $treeI: { _id: null, count: { $sum: 1 } } })
   
})

module.exports = groupRouter;