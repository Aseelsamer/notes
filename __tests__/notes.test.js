'use strict';
const Collection = require('../modules/notes-collection');
const collection = new Collection();

jest.spyOn(global.console, 'log');

require('@code-fellows/supergoose');

describe('note collection', () => {
    let object = {text:'test1',categories: school}
  it('can create() a new note', () => {
    return collection.create(obj)
      .then(result => {
          console.log("result : ", result)
        Object.keys(obj).forEach(key => {
          expect(result[key]).toEqual(object[key]);
        });
      });
  });

it('can get() list of notes',()=>{
    return collection.create(object)
    .then(result=>{
        return collection.get(result.categories)
        .then(list=>{
            Object.keys(object).forEach(key=>{
                expect(list[key].toEqual(obj[key]))
            })
        });
    })
})


});

// describe('Notes Module', () => {
//     it('if the note gives console', () => {
//         let obj = { action: 'add', payload: 'note' };
//         let note = new Notes(obj);
//         note.execute(obj);
//         expect(console.log).toHaveBeenCalled();
//     })
// });

// it('if the note gives console', () => {
//     let obj = {note: 'error:You have something wrong'}
//     let note = new Notes(obj);
//     note.execute(obj);
//     expect(console.log).toHaveBeenCalled();
// });

