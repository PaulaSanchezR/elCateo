const mongoose = require('mongoose');
const Schema    = mongoose.Schema;

const treeRecordSchema = new Schema({
  tree: { type: Schema.Types.ObjectId, ref :'Tree'},
  irrigation : { type : String, enum:[]  }, 
  irrigationdescription : { type: String},
  soilhelth : { type: String},
  soildescription: { type: String},
  salt: { type: String},
  saltdescription: { type: String},
  illness : { type: Schema.Types.ObjectId, ref :'Illness'},
  illnessdescription: { type : String}
},
{
  timestamps: true
});

const TreeRecord = mongoose.model('treerecord', treeRecordSchema);
module.exports = TreeRecord;