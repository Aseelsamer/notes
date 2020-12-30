'use strict';
const mongoose = require('mongoose');
const Note = require('./modules/note-schema.js');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');




const MONGODB_URI = 'mongodb://localhost:27017/mynote';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const yourAdds = new Input();
const yourNotes = new Notes(yourAdds);
    
    
    mongoose.disconnect()



