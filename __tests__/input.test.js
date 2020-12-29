'use strict';

const Input = require('../lib/input');

jest.mock('minimist');
minimist.mockImplementation(()=>{
    return {
      add :'hey'
    }
});

describe('Input Module',()=>{
    it ('addNote() is correct it return action',()=>{
        let text = new Input();
        expect(text.addNote('Hey')).toEqual({action:'add' , payload:'hello'})
    })
});

it ('addNote() entered wrong args return wrong',()=>{
    let text = new Input();
    expect(text.addNote('error')).toEqual('You have something wrong')
});