/**
 * LITERAL OBJECTS
 */

// Todo objeto tiene un prototype con:
// Métodos, getter, setters, atributos y objetos

const person = {
  name: 'Sadith',
  surname: 'Nunez',
  age: 20,
}

const user = {
  name: 'Sadith',
  username: 'zokko',
  pwd: '$123.'
}

// console.log( {person} ); // it is equal to: {person: person}
// console.table(person);
// console.table( {person, user} ); // it is equal to: {person: person}


// REFERENCE ASSIGNMENT: REFERENCED OBJECT COPY
// Maintain memory reference
const personRef = person;
personRef.name = 'Luis';

console.log( person );
console.log( personRef );

// MAPPED OBJECT
// Not maintain memory reference
const personMapped = { ...person };