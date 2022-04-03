/**
 * ARRRAYS
 */

// Declaración instanciada
// const array = new Array();
// const array2 = new Array(10); // Puede expandirse, .push

// console.log(array);
// console.log(array2);

// DECLARACIÓN TÍPICA
const arreglo = [1, 2, 3, 4];
//  .push(), modifica el objeto principal.
//  los arrays no se copian se referencian
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

// COPIA REFERENCIADA:
// Copia referenciada directamente
console.log('Referencia directa...');
const referencedCopy = arreglo;
referencedCopy.push(5);

console.log(arreglo);
console.log(referencedCopy);

// Copia referenciada anidada
// Mantiene referencia de memoria, por lo tanto los cambios 
// afectarían el array base
console.log('Refeerencia directa anidada...');
const insteadCopy = [arreglo, 6];
insteadCopy[0].push('instead');
console.log(arreglo);
console.log(insteadCopy);


// SPREAD OPERATOR: MAPEO DE ARRAY
// Al modificar el nuevo array, no se modifica el array copiado
// ya que al mapearse no se mantiene referencia a memoria
console.log('Copia por SPREAD OPERATOR: Mapeo de array...');
const arrayBase = [1, 2, 3]
console.log('arrayBase:', arrayBase);

const copy = [...arrayBase, 4];
console.log('arrayBase:', arrayBase);
console.log('copy:', copy);

// .map(): Mapeo funcional
// El método map() crea un nuevo array con los resultados de 
// la llamada a la función indicada aplicados a cada uno de 
// sus elementos.
console.log('using .map() to manipulate arrays');
const mappedArray = arrayBase.map( (i) => i );

const doubles = arrayBase.map( (i) => {
  return i*2;
});
console.log(mappedArray);
console.log(doubles);