import { userlist } from './db.js';

console.log( userlist[0].name );

// Primiteves
const num = 5; //number
const userName = 'Gábor';
const isActive = false;
const nothing = null; //object
let test; // undefined

Number.prototype.isDivided = function(divider) {
    return this % divider === 0; 
};

console.log( num.isDivided(2) );

//Collections
const mixed = [ 1, 2, 4 ['Hello', true], {id: 44}, false ];
console.log( mixed[4].id );
console.log( mixed.length );
mixed[5] = true;

console.log( userlist[0].age )
userlist[0].name = 'Little Mermaid';
console.log( userlist );

const key = 'id';
console.log( userlist[1][key] )



console.log('Hello JS!');