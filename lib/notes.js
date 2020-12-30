'use strict';

// const { listIndexes } = require('../modules/note-schema');
const Collection = require('../modules/notes-collection');
const collection = new Collection();


class Notes {
    constructor(text) {
        this.execute(text)
    }

    async execute(text) {
        console.log(text);
        if (text.method.action === 'add' || text.method.action === 'a') {
            this.add(text);
        }
        else if (text.method.action === 'list') {
            return listIndexes(text);
        } else if (text.method.action === 'delete') {
            return this.delete(text)
        } else { text.method }
    }

    async add(text2) {//this add should save 
        let record = { text: text2.method.payload, categories: text2.method.categories };
        // let addNote = new listIndexes(record);
        // await addNote.save();
        let new = await collection.create(record);
        console.log(`note : ${new.text}`)
    }

    async delete(text) {//this should delete
        if ((text.note) === 'string') {
            console.log(text);
        } else {
            try {
               await collection.delete(text.method.id);
            }
            catch (err) {
                console.log('wrongID');
            }
        }
    }
    async list(text) {//this should list 
        if (text.note.cat === 'all') {
            let allNotes = await collection.get();
            allNotes.forEach(val => {
                console.log(` ${val.text},category : ${val.categories},id : ${val._id} `);
            });

        } else {
            let noteCat = await addNote.find({ categories: text.note.cat });
            noteCat.forEach(val => {
                console.log(` ${val.text}
              category : ${val.category}            id : ${val._id}  `);
            });
        }
    }

    async update(text){
        let record = {text : text.method.payload , id : text.method.id};
        let update = await collection.update(record.id , record.text);
        console.log('Note Updated' , update.text);
      }
}

module.exports = Notes;