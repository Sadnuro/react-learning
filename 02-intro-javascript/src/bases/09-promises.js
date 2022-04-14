import { getHeroById } from "./08-import-export";

// Promises

// const promise = new Promise((resolve, reject) => {

//     // Recibe un callback y un tiempo de espera para ejecutarla
//     setTimeout( ()=>{
//         const hero = getHeroById(2);
//         // resolve( hero );
//         reject( 'MSG: Not found' );
//     }, 3000);
// });

// // catch: rejected | then: resolved | finally
// promise.then( (hero) => {
//     console.log(hero)
// })
// .catch( err => console.warn(err));

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
    
        // Recibe un callback y un tiempo de espera para ejecutarla
        setTimeout( ()=>{
            const hero = getHeroById(id);
            hero == undefined ? reject( 'MSG: Not found' ) : resolve( hero );
        }, 3000);
    });
}

getHeroByIdAsync(2)
    // toma el primer argumento que reciba el cath 
    .then( console.log) // hero => console.log('Response:', hero)
    .catch( console.warn ); // err => console.warn(err)
