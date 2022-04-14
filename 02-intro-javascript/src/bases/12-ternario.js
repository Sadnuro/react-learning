// 12 - Operador ternario

const activo = true;
const errata = false;
const age = 19;

const mensaje = (activo===true, errata===true, age > 18) ? 'Activo' : 'Inactivo';

//          valida | asigna
const msg = activo && 'Activo'

console.log(mensaje)

// Mas de una operacion por caso 
const asignacion = (age<20) ? (
    alert('OK, can you continue'),
    'continue.html'
):(
    alert('OH, OH!'),
    'index.html'
);

// location.assign(url);
console.log(asignacion)