// clases en ES6

class Libro {

    constructor (autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }
}

class LibroTecnico extends Libro {

    constructor (autor, titulo, numPag, precio) {
        super(autor, titulo)
        this.numPag = numPag
        this.precio = precio
    }

    calcularPrecio () {
        let pFinal = this.precio * 1.16
        console.log(pFinal)
    }
}

let oLibro = new LibroTecnico("Pepe","Angular", 300, 50)
oLibro.editorial = "Anaya"
console.log(oLibro)
oLibro.calcularPrecio()
