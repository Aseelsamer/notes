'use strict';

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    note: { type: String, required: true},
    categories: { type: String, required:true }
});

module.exports = mongoose.model('note', noteSchema);