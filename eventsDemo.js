import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('hello '+ name)
}
function goodbyeHandler(name){
    console.log('goodbye '+ name)
}

myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);

//Emit events,
myEmitter.emit('greet' , 'John');
myEmitter.emit('goodbye' , 'John');
