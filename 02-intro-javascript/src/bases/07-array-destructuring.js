/**
 * ARRAY DESTRUCTURING
 */

const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ c1 ] = characters;
const [ , c2 ] = characters;

console.log(c1);
console.log(c2);

const returnArray = () => {
  return ['ABC', 123];
}

const [ letras, numbers ] = returnArray();
console.log(letras, numbers);



// homework
/*
const useState = ( value ) => {
  return [ value, ()=>{console.log('Hello world!')} ];
}

const arr = useState(1);
console.log(arr);
arr[1]();
*/

/**
 * Print in the console
 * 1. First position: name
 * 2. setName
 */

const destructuring = () => {
  return [ 'Sadith', (newName)=>{console.log(newName)} ];
} 

const [ name, setName ] = destructuring();
console.log(name);
setName('Luis');
