'use strict';

const minimist = require('minimist');

class Input{
constructor(){

   const args = minimist(process.argv.slice(2));
    
    if(argument=== 'add' || 'a'){
        this.method=this.addNote(args.add || args.a)
    }else{
        this.method=this.addNote('error');
    }
}
    
    addNote(notes){
        if (notes !== true){
            return {action:'add',payload:'note'};
        } else if(notes === 'error') {
            return 'Enter -a or --add'
        }else {
            return 'You have an error'
        }
    }
}


module.exports = Input;