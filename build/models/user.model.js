'use strict';

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

UserSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('user', UserSchema);