
// Objeto literal
let oPrueba = {
    precio : 12,
    iva: 1.16,
    actualizar : function(p,i) {
        this.precio = p
        this.iva = i
    }
};

oPrueba.actualizar(22, 1.20)
oPrueba.precio=22
oPrueba.iva= 1,20


// Funciones constructoras

function Prueba (precio,iva) {
    this.precio = precio;
    this.iva = iva
    this.algMas = function () {}
    
}
Prueba.prototype.algo = function () {}


let oPrueba1 = new Prueba (12, 1.16)
let oPrueba2 = new Prueba (26, 1.18)

oPrueba1.algMas()
//oPrueba.algo()

console.log(oPrueba1);