'use strict';

function Notes(text){
this.execute(text)
}

Notes.prototype.execute = function(text){
if(text.argument.action === 'add'){
    this.add(text);
}else { text.argument}
}

Notes.prototype.add=function(text){
this.noteAdded= text.argument.payload;
this.ID=Math.floor(Math.random() *20)
console.log(`with an ID=${ID} and the note text=${this.noteAdded}`)
}

module.exports=Notes;