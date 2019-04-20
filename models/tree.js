const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const treeSchema = new Schema ({
  position: {type: String},
  latitud:{type:Number, required:true},
  altitud:{type:Number,require:true},
  name: {type: String},
  description:{type: String}
  },
  {
    timestamps : true
  })

  const Tree = mongoose.model('tree',treeSchema);
  module.exports = Tree