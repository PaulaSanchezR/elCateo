const mongoose = require('mongoose');
const Schema    = mongoose.Schema;

const treeRecordSchema = new Schema({
  treeId: { type: Schema.Types.ObjectId, ref :'Tree'},
  irrigation : [
                {type : String}
               ],
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

const TreeRecord = mongoose.model('Treerecord', treeRecordSchema);
module.exports = TreeRecord;