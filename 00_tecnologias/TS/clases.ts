// clases en typeScrip

interface Editorial {
    editorial: string
    localidad: string
    pais: string;
    mostrarEditorial (): void;
}

interface Autor {
    nombre: string,
    apellidos: string
}


class Libro implements Editorial {

    public autor: Autor;
    //protected autores: [string];
    
    private titulo: string;
    public editorial: string;
    public localidad: string
    public pais: string;
    public generos: {nombre: string, epoca: string};

    constructor (autor: Autor, titulo: string) {
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrarEditorial( ) {}
}

class LibroTecnico extends Libro {

    public numPag: number | string;
    public precio: number;
    public isDisponible: boolean;

    constructor (autor: Autor, titulo: string, numPag, precio) {
        super(autor, titulo)
        this.numPag = numPag
        this.precio = precio
        this.isDisponible = true;
    }

    calcularPrecio () {
        let pFinal = this.precio * 1.16
        console.log(pFinal)
    }
}

let oLibro = new LibroTecnico({nombre: "Pepe", apellidos: "Perez"},"Angular", 300, 50)

oLibro.generos = {
     epoca :"XX",
     nombre : "Informatica"}


console.log(oLibro)
oLibro.calcularPrecio()
console.log(oLibro.generos)
