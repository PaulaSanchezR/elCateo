const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const illnessSchema = new Schema({
    name       : {Type: String},
    lookslike  : {Type:String},
    control    : {Type:String},
    observation : {Type:String}
})

const Illness  = mongoose.model('illness', illnessSchema);
module.exports = Illness;