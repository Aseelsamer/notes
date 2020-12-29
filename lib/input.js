'use strict';

const minimist = require('minimist');

class Input{
constructor(){

   const args = minimist(process.argv.slice(2));
    // console.log(args);
    if(Object.keys(args)[1] === 'add' || 'a'){
        this.method=this.validation(args)
    }else{
        this.method=this.validation('error');
    }
}
validation(notes){
        let key = Object.keys(notes)[1];
        let val = notes[key];
        console.log(key);
        console.log(val);
        // console.log(notes)
        if (val !== true){
        
            return {action :key,payload:val};
        } else if(val === 'error') {
            return 'Enter -a or --add'
        }else {
            return 'You have an error'
        }
    }
}


module.exports = Input;