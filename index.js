'use strict';
const mongoose = require('mongoose');
const Note = require('./modules/note-schema');

const MONGODB_URI = 'mongodb://localhost:27017/mynote';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


async function connection() {
    try {
        const yourAdds = new Input();
        const yourNotes = new Notes(yourAdds);
        await yourNotes.execute(yourAdds);
        mongoose.disconnect()

    } catch (err) {
        console.log(err);
    }
}


connection();


