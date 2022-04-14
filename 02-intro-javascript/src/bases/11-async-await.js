// 11 - Async - Await 


const getImagen = async () => {
    try {
        const URL = 'http://api.giphy.com/v1/gifs/random?apikey=ILGie6TY098dp35rTNvf45ZN4KtiQWwu';
        const res = await fetch(URL);
        const data = await res.json();
    
        const img_url = data.data.images.original.url;
        console.log(img_url)
    
        const img = document.createElement('img');
        img.src = img_url;
        document.body.append(img);
    } catch (error) {
        // error management
        console.error(error)
    }

}

getImagen();