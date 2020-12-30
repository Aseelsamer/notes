'use strict';

const { listIndexes } = require('../modules/note-schema');

class Notes{
    constructor(text){
        this.execute(text)
    }

execute(text){
    console.log(text);
if(text.method.action === 'add' ||text.method.action ===  'a'){
    this.add(text.method);
}
else if (text.method.action === 'list'){
    return listIndexes(text);
}else if (text.method.action === 'delete'){
    return delete(text)
}else { text.method}
}

add(text2){//this add should save 
this.noteAdded= text2.payload;
this.ID=Math.floor(Math.random() *10)
console.log(`with an ID=${this.ID} and the note text=${this.noteAdded}`)
}

delete(){//this should delete

}

list(){//this should list 

}


}


module.exports=Notes;