const express = require('express');
const illnessRoute = express.Router();
const mongoose =  require('mongoose');


const Illness     = require ('../models/illness');


// ==== LIST illeness =====
illnessRoute.get('/illness',(req,res,next) => {
  Illness.find()
  .then( illenessFromDb =>{
    console.log(" info" , illenessFromDb )
    res.json(illenessFromDb)
  })
     
  .catch(err => next(err))
})

// ==== NEW ILLENESS ======
illnessRoute.post('/illness', (req,res, next)=> {

const {  name, lookslike , control , observation } =req.body ;
console.log('information == ', req.body)
if(name === '' || lookslike ==='' || control === ''){
  res.status(401).json({ message:" name, lookslike , control are require"})
  return;
}
  console.log("name",name)
  console.log("lookslike",lookslike)
  Illness.create({
    name, 
    lookslike,
    control , 
    observation
  })
    .then(newIllness => {
      console.log('=====',newIllness);
      res.json(newIllness);
    })
    .catch(err => {
      res.json(err)
    })
});




//====== DELETE ILLNESS
illnessRoute.delete('/illnessremove/:id', (req, res, next) => {
  console.log("id", req.params.id)
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Illness.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `TreeRecord with ${req.params.id} is removed successfully.`,
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = illnessRoute;