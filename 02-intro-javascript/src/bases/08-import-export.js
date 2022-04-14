// MULTIPLES EXPORTACIONES | EXPORTACIONES POR DEFECTO
// export default = []
// export default name;

// import { heroes } from './data/heroes';  // reuiere export del archivo origien

// Default import | import (individual exports)
import heroes, {owners} from "../data/heroes"

// Option 1
const getHeroById = (id) => {
  return heroes.find( hero => hero.id===id)
}

// Option 2
const getHeroById2 = (id) => heroes.find( hero => hero.id===id);

// console.log( getHeroById(2) )
// console.log( getHeroById2(3) )


const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner===owner);
// console.log( getHeroesByOwner('DC') )
// console.log( owners )

export {
  getHeroById,
  getHeroesByOwner
}