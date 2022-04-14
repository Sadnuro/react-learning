const API_KEY = 'ILGie6TY098dp35rTNvf45ZN4KtiQWwu';
const ENDPOINT = 'http://api.giphy.com/v1/gifs/random';

const URL = 'http://api.giphy.com/v1/gifs/random?apikey=ILGie6TY098dp35rTNvf45ZN4KtiQWwu'
// `${ENDPOINT}?apikey=${API_KEY}`

const peticion = fetch(`${ENDPOINT}?apikey=${API_KEY}`)
console.log(' hola');
peticion
    .then( resp => resp.json())
    .then( ( {data} ) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
        console.log(url)
    })
    .catch(console.warn)
