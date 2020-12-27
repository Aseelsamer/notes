'use strict';

const minimist = require('minimist');

function Input(){

    console.log('action:',process.argv);
    console.log('payload:',process.argv);
    console.log("process.argv.slice(2)>>",process.argv.slice(2))

    const args = minimist(process.argv.slice(2));
    this.argument = this.validateMethod(args.a || args.add);
}

Input.prototype.validateMethod= function(m){
  return minimist(m) ? m:'please add -a or -add to put a note';
}

Input.prototype.addNote=function(notes){
    if (notes){
        return {action:'add',payload:'note'};
    } else {
        return 'You have an error'
    }
}

module.exports = Input;