const mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
});

UserSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = mongoose.model('user', UserSchema);