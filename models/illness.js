const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const illnessSchema = new Schema({
    name       : {type: String},
    lookslike  : {type:String},
    control    : {type:String},
    observation : {type:String}
})

const Illness  = mongoose.model('Illness', illnessSchema);
module.exports = Illness;