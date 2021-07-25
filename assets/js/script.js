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
const moduloInicio = (() => { // funcion auto ejecutada
    /** 
           Se cree una función privada que reciba la url del video y el id de la etiqueta
iframe, para así poder mostrar los videos en el documento HTML. Dato:
puedes utilizar la instrucción “setAttribute” para manipular el DOM.
*/
    mostrarDatos = (url, id) => {   //funcion privada
        console.log("en funcion privada")


    }
    return {
        /**  Se retorne una función pública que reciba los parámetros (url, id), y realice el
        llamado a la función interna (privada) para insertar los elementos recibidos.  */
        recibirDatos: (url, id) => {  //funcion publica
            mostrarDatos(url, id); // llamado a funcion privada
            console.log("en funcion publica");
        }
    };

})();

//main

let botonMusica = document.getElementById('botonMusica');
let botonPelicula = document.getElementById('botonPelicula');
let botonSerie = document.getElement('botonSerie');

botonMusica.addEventListener('click', moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY", "musica"));
botonPelicula.addEventListener('click', moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY", "musica"));
botonSerie.addEventListener('click', moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY", "musica"));


moduloInicio.ingresoDatos("https://www.youtube.com/embed/5PSNL1qE6VY", "musica")