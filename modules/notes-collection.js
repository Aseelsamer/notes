'use strict';

const { create, update } = require('./note-schema');
const schema = require('./note-schema');

class Collection {
    constructor(){

    }

    async get(categories){
        if(categories){
            return await schema.find({categories})
        }else{
            return await schema.find({});
        }
    }
    async create(record){
        let newRecord = new schema (record);
        return await newRecord.save();
    }
    
    async update(id,record){
        return await schema.findByIdAndUpdate({_id:id},{text:record});
    }


    async delete(_id){
        await schema.findByIdAndDelete(_id);
      }


}


module.exports = Collection;