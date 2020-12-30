'use strict';

const { listIndexes } = require('../modules/note-schema');

class Notes {
    constructor(text) {
        this.execute(text)
    }

    execute(text) {
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
        let addNote = new listIndexes(record);
        await addNote.save();
        console.log(`note : ${addNote.text}`)
    }

    async delete(text) {//this should delete
        if ((text.note) === 'string') {
            console.log(text);
        } else {
            try {
                await addNote.findOneAndDelete({ _id: text.note.id });
            }
            catch (err) {
                console.log('wrongID');
            }
        }
    }
    async list(text){//this should list 
        if (text.note.cat === 'all') {
            let allNotes = await addNote.find({});
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
    }

module.exports = Notes;