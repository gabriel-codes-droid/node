import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(){
    console.log('hello World')
}
function goodbyeHandler(){
    console.log('goodbye World')
}

myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);

//Emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye');
