'use strict';
const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {
    it('if the note gives console', () => {
        let obj = { action: 'add', payload: 'note' };
        let note = new Notes(obj);
        note.execute(obj);
        expect(console.log).toHaveBeenCalled();
    })
});

it('if the note gives console', () => {
    let obj = {note: 'error:You have something wrong'}
    let note = new Notes(obj);
    note.execute(obj);
    expect(console.log).toHaveBeenCalled();
});

