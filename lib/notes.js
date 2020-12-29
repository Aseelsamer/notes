'use strict';

class Notes{
    constructor(text){
        this.execute(text)
    }

execute(text){
if(text.yourNotes.action === 'add'){
    this.add(text);
}else { text.yourNotes}
}

add(text){
this.noteAdded= text.yourNotes.payload;
this.ID=Math.floor(Math.random() *10)
console.log(`with an ID=${ID} and the note text=${this.noteAdded}`)
}
}


module.exports=Notes;