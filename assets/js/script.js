class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = () => _url;
    }

    get url() {
        return this.getId();
    }

    setInicio() {
        console.log("setinicio");
    }

}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;

        this.getId = () => _id;

    }

    get id() {
        return this.getId();
    }

    playMultimedia() {
        console.log("play multimedia");
    }

    setInicio() {
        console.log("set inicio");
    }


}


//funciones
const moduloInicio = (() => {

    return {
        ingresoDatos: (url,id) => {
console.log("en ingreso datos")


        }
        
        };
        
})();

//main

let botonMusica = document.getElementById('botonMusica');
let botonPelicula = document.getElementById('botonPelicula');
let botonSerie = document.getElementById('botonSerie');

botonMusica.addEventListener('click', moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY","musica"));
botonPelicula.addEventListener('click', moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY","musica"));
botonSerie.addEventListener('click', moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY","musica"));


moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY","musica")