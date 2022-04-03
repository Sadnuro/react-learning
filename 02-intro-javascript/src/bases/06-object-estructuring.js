/**
 * OBJECT DESTRUCTURING
 */

// Asignacion desestructurante
const person = {
  name: 'Tony',
  age: 45,
  nickname: 'Ironman'
}

// const {name, nickname, age} = person;

// console.log(name);
// console.log(nickname);
// console.log(age);

const returnPerson = (user) => {
  console.log(user);
}
returnPerson(person);

const returnPerson2 = ({ name, age, range = 'Captain' }) => {
  console.log(name, age, range);
}
returnPerson2(person);

const returnPerson3 = ({ name, nickname, age, range = 'Captain' }) => {
  return {
    nombreClave: nickname,
    edad: age
  }
}
const character = returnPerson3(person);
console.log(character);

// Estructuras complejas

const hola = ({ name, nickname, age, range = 'Captain' }) => {
  return {
    nombreClave: nickname,
    edad: age,
    latLng: {
      lat: 14.242423,
      lng: -12.23243
    }
  }
}

const { nombreClave, edad, latLng: {lat, lng} } = hola(person);
console.log(nombreClave, edad, lat, lng)