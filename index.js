'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


const yourAdds = new Input();
const yourNotes = new Notes(yourAdds);

// yourAdds.validateMethod();
yourAdds.addNote();

yourNotes.execute();
yourNotes.add();