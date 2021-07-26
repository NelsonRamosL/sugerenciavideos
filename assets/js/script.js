class Multimedia {
    constructor(url) {
        let _url = url; //Proteger el atributo de la clase implementado closures.
        this.getUrl = () => _url;
        this.setUrl = (nuevaUrl) => _url = nuevaUrl;
        
    }

    get url() {
        return this.getUrl();
    }

    set url(nuevaUrl){
        this.setUrl(nuevaUrl);
        }

    setInicio() {
        // Agregar un método denominado “setInicio”, que retorne el siguiente mensaje: “Este método es para realizar un cambio en la URL del video”
        return "“Este método es para realizar un cambio en la URL del video”";
    }
}

// Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia
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
        /** Crear un método denominado “playMultimedia”, que permita hacer el llamado
        a la función pública de la IIFE, enviando los atributos url y id.  */
        moduloInicio.recibirDatos(this.url, this.id);
    }

    setInicio() {
        let tiempo = 30;
        /** Agregar un método denominado “setInicio”, que reciba y agregue un tiempo
        de inicio a la URL de la etiqueta iframe. Se puede utilizar el método
        “setAttribute” para modificar la URL agregando al final de la misma lo
        siguiente: “?start=${tiempo}”. Esto permitirá que cualquiera de los videos que
        implemente el método inicie en el tiempo pasado como argumento al método
        al ser invocado.   */
        let nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        this.setUrl(nuevaUrl);
console.log(this.getUrl())


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
        let musica = document.getElementById('musica2')
        let pelicula = document.getElementById('pelicula2')
        let serie = document.getElementById('serie2')

        if (id == 'botonMusica') {
            musica.setAttribute('src', url);
            console.log(`en funcion privada url ${url} e id ${id}`);
        }

        if (id == 'botonPelicula') {
            pelicula.setAttribute('src', url);
            console.log(`en funcion privada url ${url} e id ${id}`);
        }


        if (id == 'botonSerie') {
            serie.setAttribute('src', url);
            console.log(`en funcion privada url ${url} e id ${id}`);
        }


    }
    return {
        /**  Se retorne una función pública que reciba los parámetros (url, id), y realice el
        llamado a la función interna (privada) para insertar los elementos recibidos.  */
        recibirDatos: (url, id) => {  //funcion publica
            mostrarDatos(url, id); // llamado a funcion privada
            console.log(`en funcion publica url ${url} e id ${id}`);
        }
    };

})();

//main
// captura id button
let botonMusica = document.getElementById('botonMusica');
let botonPelicula = document.getElementById('botonPelicula');
let botonSerie = document.getElementById('botonSerie');



/** Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta
iframe, por lo que se deben crear tres instancias, una para música, otra para película
y otra para serie, con sus respectivas URL.    */

const musica = new Reproductor("https://www.youtube.com/embed/6BJorrGulVs", botonMusica.id);
const pelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", botonPelicula.id);
const serie = new Reproductor("https://www.youtube.com/embed/qVTi5fNAq64", botonSerie.id);

/** Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las
instancias creadas. */
pelicula.setInicio()

/** Invocar al método “playMultimedia” para cada instancia creada, mostrando así los
videos en el documento HTML. */
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();




console.log(musica)