'use strict';

class Notes{
    constructor(text){
        this.execute(text)
    }

execute(text){
    console.log(text);
if(text.method.action === 'add' ||text.method.action ===  'a'){
    this.add(text.method);
}else { text.method}
}

add(text2){
this.noteAdded= text2.payload;
this.ID=Math.floor(Math.random() *10)
console.log(`with an ID=${this.ID} and the note text=${this.noteAdded}`)
}
}


module.exports=Notes;