/**
 * FUNCTIONS
 */

//  BAD PRACTICE OF FUNCTION DECLARATION
// Esta declaración de función es insegura, debido
// a que la integridad de la funcion puede alterarse al permitir
// la reasignación de valores a esta como si se tratase de variable

function greeting (name) {
    return `Hello ${ name }`;
  }
  console.log( 'Object type:', typeof greeting );
  console.log( greeting('Sadith') );
  
  // This notation generates a warning, but does not prevent reassignment 
  greeting = 20;
  // At this point the function not exist
  console.log( 'Object type:', typeof greeting );
  
  
  // BETTER PRACTICE OF FUNCTION DECLARATION
  // Al asignar a una función a una constante, esta estará blindada
  // de modificaciones futuras debido a su naturaleza no modificable
  // independientemente del tipo de función ( function | Arrow ).
  // Cualquier intento de modificación sobre esta generará un error.
  
  const greeting2 = function(name) {
    return `Hello ${ name }`;
  }
  console.log( greeting2('Zokko') );
  
  // greeting2 = 20; // Modification attemp
  
  const greeting3 = (name) => `Hi ${name}`;
  console.log( greeting3('Sadnuro') )
  
  
  
  // OBJECT RETURNED INTO FUNCTION BLOCK-CODE
  // En este caso el retorno instancia un objeto cuyas llaves están dentro
  // de las llaves propias de la función
  const getUser = () => {
    return {
      uid: 'ABC123',
      username: 'zokko'
    }
  }
  console.log( getUser() )
  
  // si se quiere simplificar la función flecha para hacer el retorno del objeto
  // de manera directa (sin tener {} para la funcion), se debe poner entre
  // paréntesis todo lo que se quiere retornar
  
  const getUser2 = () => ({
    uid: 'ABC123',
    username: 'zokko.0'
  })
  console.log( getUser2() )
  
  
  /**
   * TASK
   * 1. Transform to arrow function
   * 2. Must return implicit object
   * 3. Tests
   */
  function getActiveUser(name) {
    return {
      uid: 'TSK000',
      username: name 
    }
  };
  
  const activeUser = getActiveUser('Sadith dev.')
  console.log(activeUser)
  
  // Resolution
  
  const getActiveUserArrowF = (name) => ({ 
    uid: 'RES000', 
    username: name 
  });
  
  const activeUser2 = getActiveUserArrowF('Arrow user')
  console.log(activeUser2)
  